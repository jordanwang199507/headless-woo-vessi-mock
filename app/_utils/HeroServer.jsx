import { client } from "@/app/_utils/apollo";
import { gql } from "@apollo/client";
import { Hero } from "@/app/_sections";

export default async function HeroServer() {
  const GET_SITEINFO = gql`
    query GetSiteInfo {
      generalSettings {
        title
        description
      }
    }
  `;

  const { data } = await client.query({
    query: GET_SITEINFO,
  });

  return <Hero siteInfo={data.generalSettings} />;
}
