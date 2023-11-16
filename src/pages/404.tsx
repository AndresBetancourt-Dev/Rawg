import React from "react";
import type { NextPage } from "next";
import SEO from "../components/seo/SEO";

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <SEO title="Not Found" />
      <div className="w-full h-[100vh] flex items-center justify-center">
        <h1 className="text-4xl">Not Found</h1>
      </div>
    </div>
  );
};

export default NotFoundPage;