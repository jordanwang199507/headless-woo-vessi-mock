import { client } from "@/app/_utils/apollo";
import { gql } from "@apollo/client";
import { Footer } from "@/app/_sections";

export default async function FooterServer() {
  const GET_FOOTER_MENU = gql`
    query NewQuery {
      menuItems(where: { location: FOOTER }) {
        nodes {
          id
          label
          url
          path
          parentId
          childItems {
            edges {
              node {
                id
                label
                uri
                path
                parentId
              }
            }
          }
        }
      }
    }
  `;
  const { data } = await client.query({
    query: GET_FOOTER_MENU,
  });
  function buildMenuHierarchy(items) {
    const menuMap = {};
    const topLevelItems = [];

    // First, map each item by its ID
    items.forEach((item) => {
      menuMap[item.id] = { ...item, children: [] };
    });

    // Now, assign children to their parents
    items.forEach((item) => {
      if (item.parentId) {
        // This item is a child, push it into its parent's children array
        if (menuMap[item.parentId]) {
          menuMap[item.parentId].children.push(menuMap[item.id]);
        }
      } else {
        // This item has no parent, so it's a top-level item
        topLevelItems.push(menuMap[item.id]);
      }
    });

    return topLevelItems;
  }
  const hierarchicalMenu = buildMenuHierarchy(data.menuItems.nodes);
  return (
    <section className="bg-dark-gray padding-x padding-t pb-8">
      <Footer footerItems={hierarchicalMenu} />
    </section>
  );
}
