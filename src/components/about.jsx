import tw from "twin.macro";
import { css } from "styled-components/macro";
import { Element } from "react-scroll";
import WorkingImage from '../assets/working-with-caffeine.svg';

const Container = tw(Element)`relative flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center mx-auto py-10 md:py-24`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:justify-between max-w-screen-xl mx-auto`;
const LeftColumn = tw.div`relative lg:w-6/12 order-2 lg:order-1 text-center max-w-xl mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 order-1 lg:order-2 flex-1 flex flex-col items-center justify-center lg:self-end`;
const Subheading = tw.h5`font-bold text-primary-500 mb-4`;
const Heading = tw.h2`text-4xl font-black tracking-wide text-center w-full`;
const Description = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl w-full text-center`;
const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

export const AboutSection = () => {
    return (
        <Container name="about">
            <TwoColumn>
                <LeftColumn>
                    <IllustrationContainer>
                        <img css={tw`min-w-0 w-full max-w-3xl xl:max-w-4xl`} src={WorkingImage} alt="Working Image" />
                    </IllustrationContainer>
                </LeftColumn>
                <RightColumn>
                    <Subheading>About Me</Subheading>
                    <Heading>There is a lot, but let me summarize</Heading>
                    <Description>I&apos;m a passionate full-stack developer and data analyst with 3+ years of experience in the Software Industry. I break down and develop complicated products and bring them to life for clients and stakeholders. Open to connecting with like-minded professionals and exploring new challenges in the tech industry.</Description>
                </RightColumn>
            </TwoColumn>
        </Container>
    );
}