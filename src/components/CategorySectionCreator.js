import React from "react";
import Box from "./Box";
import CategorySectionHeader from "./CategorySectionHeader";
import Container from "./Container";


const CategorySectionCreator = ({
  iconName,
  seeMoreLink,
  title,
  children,
}) => {
  return (
    <Box mb="3.75rem">
      <Container pb="1rem">
        {title && (
          <CategorySectionHeader
            title={title}
            seeMoreLink={seeMoreLink}
            iconName={iconName}
          />
        )}

        {children}
      </Container>
    </Box>
  );
};

export default CategorySectionCreator;
