// components/NavServer.js
import { client } from "@/app/_utils/apollo";
import { gql } from "@apollo/client";
import { Nav } from "@/app/_components";

export default async function NavServer() {
  const GET_MENU = gql`
    query MenuQuery {
      menuItems(where: { parentId: "", location: PRIMARY }) {
        nodes {
          id
          label
          url
          path
          childItems {
            edges {
              node {
                id
                label
                url
                path
              }
            }
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: GET_MENU,
  });

  return <Nav menuItems={data.menuItems} />;
}
