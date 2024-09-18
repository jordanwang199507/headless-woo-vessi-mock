// app/[slug]/page.js
import { client } from "@/app/_utils/apollo";
import { gql } from "@apollo/client";
import { blogContent } from "@/app/_constant";
import { BlogContent } from "@/app/_sections";

const GET_POST_BY_SLUG = gql`
  query GetTargetPostByURI($id: ID!) {
    post(id: $id, idType: URI) {
      title
      content
      uri
      date
      author {
        node {
          firstName
          lastName
          name
        }
      }
      featuredImage {
        node {
          altText
          sourceUrl
          caption
        }
      }

      # Fetch categories
      categories {
        nodes {
          name
          uri
        }
      }
    }
  }
`;
const GET_MENU = gql`
  query GetAllPosts {
    posts {
      nodes {
        title
        content
        uri
        date
        author {
          node {
            firstName
            lastName
            name
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
            caption
          }
        }

        # Fetch categories
        categories {
          nodes {
            name
            uri
          }
        }
      }
    }
  }
`;

export default async function Page({ params }) {
  const { data } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: { id: params.slug },
  });

  const post = data?.post;
  //   const { title, uri, featuredImage, author, date, content, categories } = post;
  //   const [searchQuery, setSearchQuery] = useState(""); // Add search state
  //   const [tempSearchQuery, setTempSearchQuery] = useState(""); // Temporary state to hold input value

  const { data: menuData } = await client.query({
    query: GET_MENU,
  });

  const organizePosts = (data) => {
    const posts = menuData.posts.nodes.map((post) => ({
      title: post.title,
      content: post.content,
      uri: post.uri,
      date: post.date,
      author: {
        firstName: post.author.node.firstName,
        lastName: post.author.node.lastName,
        fullName: post.author.node.name,
      },
      featuredImage: {
        altText: post.featuredImage?.node?.altText || "",
        sourceUrl: post.featuredImage?.node?.sourceUrl || "",
        caption: post.featuredImage?.node?.caption || "",
      },
      categories: post.categories.nodes.map((category) => ({
        name: category.name,
        uri: category.uri,
      })),
    }));
    return posts;
  };

  const organizedPosts = organizePosts(data);
  console.log(organizedPosts);

  if (!post) {
    return <div>404 Page not found</div>;
  }

  return <BlogContent blogsPost={organizedPosts} post={post} />;
}
