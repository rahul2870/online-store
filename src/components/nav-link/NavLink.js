import Link from "next/link";
import { useRouter } from "next/router";
import React, { AnchorHTMLAttributes } from "react";
import { CSSProperties } from "styled-components";
import { ColorProps, SpaceProps } from "styled-system";
import StyledNavLink from "./NavLinkStyle";


const NavLink = ({ href, as, children, style, className, ...props }) => {
  let { pathname } = useRouter();

  const checkRouteMatch = () => {
    if (href === "/") return pathname === href;
    return pathname.includes(href);
  };

  return (
    <Link href={href}>
      <StyledNavLink
        className={className}
        href={href}
        isCurrentRoute={checkRouteMatch()}
        style={style}
        {...props}
      >
        {children}
      </StyledNavLink>
    </Link>
  );
};

export default NavLink;
