import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, Heading, HighlightedText, IllustrationContainer, LeftColumn, Paragraph, RightColumn, TwoColumn } from './TwinStyledComponents'
import IntroImage from '../assets/design-illustration.svg';
import { Element } from 'react-scroll';
import { Mail, Linkedin, GitHub } from 'react-feather';

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-6 h-6`}
  }
`;

export const IntroSection = () => {
    return (
        <Element name="intro">
            <Container>
                <TwoColumn>
                    <LeftColumn>
                        <Heading>
                            👋 Hi, I&apos;m Jayarama Das Krovvidi, a <HighlightedText>Full-Stack Developer and Data Scientist</HighlightedText>
                        </Heading>
                        <Paragraph>
                            {/* I'm a passionate full-stack developer and data analyst with 3+ years of experience in the Software Industry. I break down and develop complicated products and bring them to life for clients and stakeholders. Open to connecting with like-minded professionals and exploring new challenges in the tech industry. */}
                            Here are the fastest ways to reach me:
                        </Paragraph>
                        <SocialLinksContainer>
                            <SocialLink href="mailto:jayaram.krovvidi@outlook.com">
                                <Mail />
                            </SocialLink>
                            <SocialLink target="_blank" href="https://linkedin.com/in/jayaram-krovvidi">
                                <Linkedin css={css`fill: white;`} />
                            </SocialLink>
                            <SocialLink target="_blank" href="https://github.com/JayaramKrovvidi">
                                <GitHub />
                            </SocialLink>
                        </SocialLinksContainer>
                    </LeftColumn>
                    <RightColumn>
                        <IllustrationContainer>
                            <img css={ tw`min-w-0 w-full max-w-lg xl:max-w-3xl` } src={IntroImage} alt="Intro Image" />
                        </IllustrationContainer>
                    </RightColumn>
                </TwoColumn>
            </Container>
        </Element>
    )
}