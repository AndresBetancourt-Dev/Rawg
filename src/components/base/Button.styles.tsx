import styled from "styled-components/macro";
import tw from "twin.macro";

//TODO: Implement correct styles;
export const Container = styled.div`
  .button{
    ${tw`bg-blue-600 w-7 h-7 text-white px-[25rem] py-5 flex-1 align-middle justify-center`}
  }  
`;

export const SecondButton = tw.div`
  w-16 h-16 bg-indigo-700 text-white
`;