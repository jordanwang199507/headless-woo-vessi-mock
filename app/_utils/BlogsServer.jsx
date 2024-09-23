import { client } from "@/app/_utils/apollo";
import { gql } from "@apollo/client";
import { BlogsCotent } from "@/app/_sections";

export default async function BlogsServer() {
  const GET_MENU = gql`
    query GetAllBlogPost_${new Date().getTime()} {
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

  const { data } = await client.query({
    query: GET_MENU,
    fetchPolicy: "network-only", // Ensure fresh data is fetched from network
  });

  const organizePosts = (data) => {
    return data.posts.nodes.map((post) => ({
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
  };

  const organizedPosts = organizePosts(data);

  return <BlogsCotent blogsPost={organizedPosts} />;
}
