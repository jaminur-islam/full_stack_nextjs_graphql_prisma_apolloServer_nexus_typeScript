import React, { useEffect } from "react";
import Router from "next/router";
import { useCookies } from "react-cookie";

const withAuth = (WrappedComponent) => {
  const Auth = (props) => {
    const [cookies] = useCookies(["user_id"]);
    useEffect(() => {
      if (!cookies.user_id) Router.push("/login");
    }, []);

    return <WrappedComponent {...props} />;
  };
  return Auth;
};

export default withAuth;
