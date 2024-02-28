import GlobalStyles from './GlobalStyles'
import { NavHeader } from './components/header'
import { AboutSection } from './components/about';
import { StyledDiv } from './components/TwinStyledComponents'
import { Footer } from './components/footer';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledDiv name="top" className='App'>
        <NavHeader />
        <AboutSection></AboutSection>
        <Footer />
      </StyledDiv>
    </>
  )
}

export default App