import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Linkedin, GitHub } from 'react-feather';

const Container = tw.div`relative bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const Row = tw.div`flex items-center justify-center flex-row px-8`
const Column = tw.div`flex items-center justify-center flex-col px-8`
const Text = tw.h5`ml-2 font-bold tracking-wider`;
const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
const SocialLinksContainer = tw(Row)`mt-5`;
const SocialLink = styled.a`
  ${tw`flex flex-row cursor-pointer p-3 mr-4 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 last:mr-0`}
  svg {
    ${tw`w-5 h-5`}
    stroke-width: 1;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Column>
          <Text css={tw`text-2xl mb-6`}>Good to have you here!</Text>
          <Text>Here are my socials</Text>
          <SocialLinksContainer>
            <SocialLink target="_blank" href="https://linkedin.com/in/jayaram-krovvidi">
              <Linkedin css={css`fill: rgb(10, 102, 194); stroke: rgb(10, 102, 194);`} />
              <Text>LinkedIn</Text>
            </SocialLink>
            <SocialLink target="_blank" href="https://github.com/JayaramKrovvidi">
              <GitHub css={css`fill: black;`} />
              <Text>GitHub</Text>
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2023, Jayarama Das Krovvidi. All Rights Reserved.
          </CopyrightText>
        </Column>
      </Content>
    </Container>
  );
};
