import GlobalStyles from './GlobalStyles'
import { NavHeader } from './components/header'
import { AboutSection } from './components/about';
import { IntroSection } from './components/intro';
import { StyledDiv } from './components/TwinStyledComponents'
import { Footer } from './components/footer';
import { EducationSection } from './components/education';
import { ProjectsSection } from './components/projects';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledDiv name="top" className='App'>
        <NavHeader />
        <IntroSection></IntroSection>
        <AboutSection></AboutSection>
        <EducationSection></EducationSection>
        <ProjectsSection></ProjectsSection>
        <Footer />
      </StyledDiv>
    </>
  )
}

export default App