import tw from "twin.macro";
import { useState } from "react";
import { Menu, X } from "react-feather";
import { useAnimation, useCycle } from "framer-motion";
import {
    DesktopNavLinks, Header, LogoLink, MobileNavLinks,
    MobileNavLinksContainer, NavLink, NavLinks, NavToggle, ExternalPrimaryLink, ExternalLink
} from "./TwinStyledComponents";

const useAnimatedNavToggler = () => {
    const [showNavLinks, setShowNavLinks] = useState(false);
    const [x, cycleX] = useCycle("0%", "150%");
    const animation = useAnimation();

    const toggleNavbar = () => {
        setShowNavLinks(!showNavLinks);
        animation.start({ x: x, display: "block" });
        cycleX();
    };

    return { showNavLinks, animation, toggleNavbar }
}


export const NavHeader = () => {

    const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
    const collapseBreakpointCss = collapseBreakPointCssMap["lg"];

    const logoLink = (<LogoLink>JDK</LogoLink>);
    const links = [
        <NavLinks key={1}>
            <NavLink onClick={toggleNavbar} to="about" smooth={true} duration={500}>About Me</NavLink>
            <NavLink onClick={toggleNavbar} to="education" smooth={true} duration={500}>Education</NavLink>
            <NavLink onClick={toggleNavbar} to="experience" smooth={true} duration={500}>Experience</NavLink>
            <NavLink onClick={toggleNavbar} to="skills" smooth={true} duration={500}>Skills</NavLink>
            <NavLink onClick={toggleNavbar} to="projects" smooth={true} duration={500}>Projects</NavLink>
            <ExternalPrimaryLink onClick={toggleNavbar} css={tw`rounded-xl`} target="_blank" href="https://drive.google.com/file/d/1CPe0G98qblWwtBK3YHtY3v775igtSLNR/view?usp=sharing">My Resume</ExternalPrimaryLink>
        </NavLinks>
    ]

    return (
        <Header className="header-light">
            <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
                {logoLink}
                {links}
            </DesktopNavLinks>


            <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
                {logoLink}
                <section style={tw`flex flex-row justify-end`}>
                    <ExternalLink css={tw`bg-transparent text-primary-500 mr-6 border-b-2 border-primary-500 sticky`} target="_blank" href="https://drive.google.com/file/d/1CPe0G98qblWwtBK3YHtY3v775igtSLNR/view?usp=sharing">My Resume</ExternalLink>
                    <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
                        {links}
                    </MobileNavLinks>
                    {showNavLinks ? <NavToggle tw="right-0 mr-8 mt-3 fixed" animate={animation} onClick={toggleNavbar}><X tw="w-6 h-6" /></NavToggle> : <></>}
                    <NavToggle onClick={toggleNavbar}>
                        {showNavLinks ? <Menu tw="w-6 h-6 stroke-0" /> : <Menu tw="w-6 h-6" />}
                    </NavToggle>
                </section>
            </MobileNavLinksContainer>

        </Header>
    );
};

const collapseBreakPointCssMap = {
    sm: {
        mobileNavLinks: tw`sm:hidden`,
        desktopNavLinks: tw`sm:flex`,
        mobileNavLinksContainer: tw`sm:hidden`
    },
    md: {
        mobileNavLinks: tw`md:hidden`,
        desktopNavLinks: tw`md:flex`,
        mobileNavLinksContainer: tw`md:hidden`
    },
    lg: {
        mobileNavLinks: tw`lg:hidden`,
        desktopNavLinks: tw`lg:flex`,
        mobileNavLinksContainer: tw`lg:hidden`
    },
    xl: {
        mobileNavLinks: tw`lg:hidden`,
        desktopNavLinks: tw`lg:flex`,
        mobileNavLinksContainer: tw`lg:hidden`
    }
};