import { useEffect, useState } from "react";
import Router from "next/router";
import Loading from "@app/components/Loading";

const BaseLayout = ({ children }) => {
  const [isPageLoading, setIsPageLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setIsPageLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setIsPageLoading(false);
  });

  if (isPageLoading) {
    return <Loading />;
  } else {
    return children;
  }
};

export default BaseLayout;
