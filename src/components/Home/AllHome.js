import React from "react";
import Link from "next/link";
import { datas } from "../../../data";
import { Card } from "./Card";
import withAuth from "../Auth/withAuth/WithAuth";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const AllHome = () => {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["user_id"]);
  return (
    <div>
      <h1 className="text-4xl mt-2 text-center"> Todo apps </h1>
      <ul className="flex ml-28 gap-x-10 text-2xl">
        <li className=" hover:border-gray-500 border-b ">
          <Link href="/addLinks">
            <a> Add Links</a>
          </Link>
        </li>
        <li className=" hover:border-gray-500 border-b ">
          <Link href="/links">
            <a> My Links</a>
          </Link>
        </li>
        <li
          onClick={() => {
            removeCookie("user_id");
            router.push("/login");
          }}
          className=" hover:border-gray-500 border-b "
        >
          <a>Log Out</a>
        </li>
      </ul>

      <div className="grid grid-cols-4 m-10 p-10">
        {datas.map((link) => (
          <Card key={link.id} link={link} />
        ))}
      </div>
    </div>
  );
};

export default withAuth(AllHome);
