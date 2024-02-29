import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Element, Link } from "react-scroll";

export const StyledDiv = tw(Element)`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;
export const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
export const HighlightedText = tw.span`text-primary-500`;

export const Container = tw.div`relative`;
export const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-10 md:py-24`;
export const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
export const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

export const Header = tw.header`flex justify-between items-center max-w-screen-xl mx-auto`;
export const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
export const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

export const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
  `;

export const NavLinks = tw.div`inline-block`;

export const NavLink = tw(Link)`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 hover:cursor-pointer
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const ExternalLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 hover:cursor-pointer
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const ExternalPrimaryLink = tw(ExternalLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(ExternalLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300`;
export const DesktopNavLinks = tw.nav`hidden lg:flex flex-1 justify-between items-center`;

export const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);
