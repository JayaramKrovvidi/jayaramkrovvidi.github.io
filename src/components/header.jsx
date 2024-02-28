import tw from "twin.macro";
import { useState } from "react";
import { Menu, X } from "react-feather";
import { css } from "styled-components/macro";
import { useAnimation, useCycle } from "framer-motion";
import {
    DesktopNavLinks, Header, LogoLink, MobileNavLinks,
    MobileNavLinksContainer, NavLink, NavLinks, NavToggle, ExternalPrimaryLink
} from "./TwinStyledComponents";

export const useAnimatedNavToggler = () => {
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


export const NavHeader = ({ className, collapseBreakpointClass = "lg" }) => {

    const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
    const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

    const logoLink = (<LogoLink>JDK</LogoLink>);
    const links = [
        <NavLinks key={1}>
            <NavLink to="about" smooth={true} duration={500}>About Me</NavLink>
            <NavLink to="education" smooth={true} duration={500}>Education</NavLink>
            <NavLink to="experience" smooth={true} duration={500}>Experience</NavLink>
            <NavLink to="skills" smooth={true} duration={500}>Skills</NavLink>
            <NavLink to="projects" smooth={true} duration={500}>Projects</NavLink>
            <ExternalPrimaryLink css={tw`rounded-xl`} target="_blank" href="https://drive.google.com/file/d/1CPe0G98qblWwtBK3YHtY3v775igtSLNR/view?usp=sharing">My Resume</ExternalPrimaryLink>
        </NavLinks>
    ]

    return (
        <Header className={className || "header-light"}>
            <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
                {logoLink}
                {links}
            </DesktopNavLinks>

            <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
                {logoLink}
                <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
                    {links}
                </MobileNavLinks>
                <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
                    {showNavLinks ? <X tw="w-6 h-6" /> : <Menu tw="w-6 h-6" />}
                </NavToggle>
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