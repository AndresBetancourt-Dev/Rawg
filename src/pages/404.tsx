import React from "react";
import type { NextPage } from "next";
import SEO from "../components/seo/SEO";

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <SEO title="Not Found" />
      Not found Page
    </div>
  );
};

export default NotFoundPage;