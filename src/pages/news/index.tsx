import React from "react";
import type { NextPage } from "next";
import SEO from "../../components/seo/SEO";
import Image from "next/image";
import styled from "styled-components/macro";
import tw from "twin.macro";

const Newspaper = styled(Image)`
  ${tw`w-[25vw] h-auto`}
`

const NewsTitle = styled.h1`
  line-height: 0.9;
  font-size: clamp(2rem, 3vw, 4.5rem);
  padding-top: 1em;
  text-align: center;
`;

const NewsPage: NextPage = () => {
  return (
    <div>
      <SEO title="News" />
      <div className="w-full h-[100vh] flex flex-col justify-center items-center">
        <Newspaper
          src={"/images/newspaper.png"}
          alt="Newspaper"
          width={250}
          height={250}
        />
        <NewsTitle>There&apos;s no news for the moment!</NewsTitle>
      </div>
    </div>
  );
};

export default NewsPage;
