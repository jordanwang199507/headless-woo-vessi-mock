import { client } from "@/app/_utils/apollo";
import { gql } from "@apollo/client";
import { BlogsServer } from "@/app/_utils";

export default async function Blogs() {
  return <BlogsServer />;
}
