import GlobalStyles from './GlobalStyles'
import { NavHeader } from './components/header'
import { AboutSection } from './components/about';
import { StyledDiv } from './components/TwinStyledComponents'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledDiv name="top" className='App'>
        <NavHeader />
        <AboutSection></AboutSection>
      </StyledDiv>
    </>
  )
}

export default App