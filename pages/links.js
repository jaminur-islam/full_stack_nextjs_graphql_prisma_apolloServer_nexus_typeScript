import React from "react";
import { Card } from "../src/components/Home/Card";
import { gql, useQuery } from "@apollo/client";
import { useCookies } from "react-cookie";

const ALL_LINK = gql`
  query User($userId: String!) {
    user(id: $userId) {
      id
      email
      admin
      link {
        id
        category
        description
        imagesUrl
        title
        url
      }
    }
  }
`;

const links = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user_id"]);
  const { loading, error, data } = useQuery(ALL_LINK, {
    variables: { userId: cookies.user_id },
  });

  const userLink = data?.user?.link;

  return (
    <div>
      <h1 className="text-3xl mb-10 ml-10"> My Links </h1>
      <div className="grid grid-cols-4 gap-20">
        {userLink?.map((link) => (
          <Card key={link.id} link={link} userLink />
        ))}
      </div>
    </div>
  );
};

export default links;
