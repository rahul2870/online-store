import Link from "next/link";
import React from "react";
import Icon from "../../icon/Icon";
import { StyledCategoryMenuItem } from "./CategoryMenuItemStyle";


const CategoryMenuItem = ({
  href,
  icon,
  title,
  caret,
  children,
}) => {
  return (
    <StyledCategoryMenuItem>
      <Link href={href}>
        <div className="category-dropdown-link">
          {icon && <Icon variant="small">{icon}</Icon>}
          <span className="title">{title}</span>
          {caret && <Icon variant="small">chevron-right</Icon>}
        </div>
      </Link>
      {children}
    </StyledCategoryMenuItem>
  );
};

CategoryMenuItem.defaultProps = {
  caret: true,
};

export default CategoryMenuItem;
