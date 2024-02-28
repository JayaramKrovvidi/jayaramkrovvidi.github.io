import { Container, Heading, HighlightedText, IllustrationContainer, LeftColumn, Paragraph, RightColumn, TwoColumn } from './TwinStyledComponents'
import IntroImage from '../assets/design-illustration.svg';
import { Element } from 'react-scroll';

export const AboutSection = () => {
    return (
        <Element name="about">
            <Container>
                <TwoColumn>
                    <LeftColumn>
                        <Heading>
                            👋 Hi, I'm Jayarama Das Krovvidi, a <HighlightedText>Full-Stack Developer and Data Scientist</HighlightedText>
                        </Heading>
                        <Paragraph>
                            I'm a passionate full-stack developer and data analyst with 3+ years of experience in the Software Industry. I break down and develop complicated products and bring them to life for clients and stakeholders. Open to connecting with like-minded professionals and exploring new challenges in the tech industry.
                        </Paragraph>
                    </LeftColumn>
                    <RightColumn>
                        <IllustrationContainer>
                            <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={IntroImage} alt="Intro Image" />
                        </IllustrationContainer>
                    </RightColumn>
                </TwoColumn>
            </Container>
        </Element>
    )
}