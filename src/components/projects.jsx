import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Element } from "react-scroll";

const Container = tw(Element)`relative max-w-screen-xl mx-auto py-10 lg:py-16`;
const HeadingContainer = tw.div`text-center`;
const Subheading = tw.h5`font-bold text-primary-500 mb-4`;
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const Description = tw.p`mx-auto mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-2xl`;

const Projects = tw.div`mt-12 flex flex-col items-center`;
const ProjectContainer = tw.div`max-w-sm my-5 sm:pt-3 sm:max-w-xl lg:max-w-3xl`;
const Project = tw.a`flex flex-col h-full bg-gray-200 rounded-lg items-center lg:flex-row`;
const ProjectImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 bg-center bg-cover w-full rounded-t-lg sm:h-80 sm:min-h-full lg:w-1/2 group-hocus:text-primary-500`}
`;
const ProjectText = tw.div`flex-1 px-6 py-8 pl-8 pr-5`
const ProjectTitle = tw.h6`font-bold transition duration-300 text-2xl`;
const ProjectDescription = tw.p`mt-4 text-sm font-semibold text-gray-600 leading-relaxed`;
const TechContainer = tw.div`flex mt-2 items-center`;
const TechIcon = tw.img`w-10 h-10 sm:w-12 sm:h-12 mr-3`;
const TechHeading = tw.div`my-3 font-bold text-gray-700 text-sm`;


export const ProjectsSection = () => {
    return (
        <Container name="projects">
                <HeadingContainer>
                    <Subheading>Projects</Subheading>
                    <Heading>Oh the Code Symphonies!</Heading>
                    <Description>Welcome to my project showcase! Here, you'll find a collection of my endeavors fueled by curiosity and a drive to solve real-world challenges. From building software solutions to addressing everyday problems encountered during my academic and professional journey, I'm passionate about creating meaningful projects that make a difference. Explore the innovative ideas and problem-solving approaches I've implemented, reflecting my enthusiasm for continuous learning and innovation.</Description>
                </HeadingContainer>
                <Projects>
                    {projects.map((post, index) => (
                        <ProjectContainer featured={post.featured} key={index}>
                            <Project className="group" target="_blank" href={post.url}>
                                {index % 2 === 0 ? <ProjectImage tw="lg:rounded-tr-none lg:rounded-l-lg lg:order-1" imageSrc={post.postImageSrc} /> : <></>}
                                {index % 2 === 1 ? <ProjectImage tw="lg:rounded-tl-none lg:rounded-r-lg lg:order-3" imageSrc={post.postImageSrc} /> : <></>}
                                <ProjectText tw="order-2">
                                    <ProjectTitle>{post.title}</ProjectTitle>
                                    <ProjectDescription>{post.description}</ProjectDescription>
                                    <TechHeading>Technologies</TechHeading>
                                    <TechContainer>
                                        {post.tech_icons.map((src_url, index) => (
                                            <TechIcon key={index} src={src_url} />
                                        ))}
                                    </TechContainer>
                                </ProjectText>
                            </Project>
                        </ProjectContainer>
                    ))}
                </Projects>
        </Container>
    );
};

const projects = [
    {
        postImageSrc: "https://wallpapercave.com/wp/wp4048659.jpg",
        title: "College Compass",
        description: "A comprehensive web application for college exploration, comparison, and decision-making, powered by data analytics and interactive visualizations.",
        url: "https://github.com/JayaramKrovvidi/College-Compass",
        tech_icons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg"
        ]

    },
    {
        postImageSrc: "https://cdn.dribbble.com/users/4578246/screenshots/11686961/media/4dc98cb882ab94ed5db020fe8f57616a.png",
        title: "LANS",
        description: "LANS (Language Agnostic New Summarizer) is a versatile text summarization tool designed to provide concise and accurate summaries of news articles, and suitable for integration into GitHub projects.",
        url: "https://github.com/JayaramKrovvidi/Language-Agnostic-News-Summarizer",
        tech_icons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original-wordmark.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg"
        ]
    }
];