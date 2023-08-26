import client from "../src/graphql/apollo-client";
import Table from "../src/components/CustomTable";
import { Inter } from "next/font/google";
import { gql } from "apollo-server-core";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  if (props?.error) return <h1>Error: {JSON.parse(props.error).message}</h1>;
  else return <Table dataSource={props?.data?.users} />;
}

export const getServerSideProps = async () => {
  try {
    const result = await client.query({
      query: gql`
        query {
          users {
            user_name
            email
            phone
            linkedin_url
            company
          }
        }
      `,
    });

    return {
      props: result,
    };
  } catch (error) {
    return {
      props: { error: JSON.stringify(error) },
    };
  }
};
