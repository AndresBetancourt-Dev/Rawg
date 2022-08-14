import styled from "styled-components/macro";
import tw from "twin.macro";
import DeactivatableLink from "../accessibility/DeactivatableLink";

export const Content = styled(DeactivatableLink)`
  ${tw`flex items-center mb-5 space-x-6 cursor-pointer`}
`;

export const Circle = styled.span`
    ${tw`w-[45px] h-[45px] rounded-full flex justify-center items-center`}
`;

export const Text = styled.span`
    ${tw`flex-1 h-8 rounded-lg text-white flex items-center justify-center font-title`}
`;