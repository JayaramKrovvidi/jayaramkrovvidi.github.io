import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import { Element } from "react-scroll";
import { MapPin, Award, BookOpen, Calendar } from "react-feather";
import { TextRenderer } from "../helpers/TextRenderer";

const Container = tw(Element)`relative flex flex-col items-center mx-auto py-10`;

const Heading = tw.div`font-bold mb-5 md:mb-16 text-primary-500 text-center`;
const CardsContainer = tw.div`relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-start justify-start mx-auto`;
const Card = tw.div`h-full w-full flex-auto flex-col border max-w-lg rounded-2xl focus:outline-none`;

const CardImage = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`w-full h-48 sm:h-56 bg-cover bg-center rounded rounded-t-2xl`
]);

const TextContainer = tw.div`py-4 px-4 sm:px-6`;
const Title = tw.h5`text-2xl font-bold text-center`;

const StatsContainer = tw.div`flex flex-col sm:flex-row justify-evenly mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mt-4`;
const StyledTextRenderer = ({ children }) => {
    return <TextRenderer css={tw`ml-1`}>{children}</TextRenderer>;
  };

const Description = tw.p`text-sm leading-loose mt-4 text-justify`;


const educationData = [
    {
        imageSrc: "https://news.stonybrook.edu/wp-content/uploads/2023/12/fall-2023-sunset.jpg",
        title: "M.S. in Computer Science",
        description: "During my Master of Science in Computer Science at Stony Brook University from August 2022 to May 2024, I specialized in Data Science, delving into advanced courses such as <strong>Data Visualization, Natural Language Processing, Probability and Statistics</strong>. Achieving a stellar GPA of 3.97/4.0, I honed my skills in data analysis and predictive modeling.",
        locationText: "Stony Brook, NY",
        specializationText: "Data Science",
        cgpa: "<strong>3.97/4.0</strong>",
        dates: "<strong>August 2022 - May 2024</strong>"
    },
    {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/MAHEMANIPALEDU.jpg/1024px-MAHEMANIPALEDU.jpg",
        title: "B.Tech in Computer Science",
        description: "At Manipal Institute of Technology from July 2015 to July 2019, I pursued a Bachelor of Technology in Computer Science with a specialization in Artificial Intelligence. Here, I delved into courses such as <strong>Artificial Intelligence, Machine Learning, and Social Network Analysis</strong>, laying a strong foundation in AI concepts and algorithms.",
        locationText: "Manipal University, India",
        specializationText: "Artificial Intelligence",
        cgpa: "<strong>8.72/10</strong>",
        dates: "<strong>July 2015 - July 2019</strong>"
    }
];



export const EducationSection = () => {
    return (
        <Container name="education">
            <Heading>Education</Heading>
            <CardsContainer>
                {educationData.map((card, index) => (
                    <Card key={index}>
                        <CardImage imageSrc={card.imageSrc} />
                        <TextContainer>
                            <Title>{card.title}</Title>
                            <StatsContainer>
                                <IconWithText>
                                    <Calendar />
                                    <StyledTextRenderer>{card.dates}</StyledTextRenderer>
                                </IconWithText>
                                <IconWithText>
                                    <Award />
                                    <StyledTextRenderer>{card.cgpa}</StyledTextRenderer>
                                </IconWithText>
                            </StatsContainer>
                            <StatsContainer>
                                <IconWithText>
                                    <MapPin />
                                    <StyledTextRenderer>{card.locationText}</StyledTextRenderer>
                                </IconWithText>
                                <IconWithText>
                                    <BookOpen />
                                    <StyledTextRenderer>{card.specializationText}</StyledTextRenderer>
                                </IconWithText>
                            </StatsContainer>
                            <Description><TextRenderer>{card.description}</TextRenderer></Description>
                        </TextContainer>
                    </Card>
                ))}
            </CardsContainer>
        </Container>
    );
};
