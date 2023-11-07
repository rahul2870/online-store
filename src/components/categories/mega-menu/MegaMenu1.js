import Box from "@component/Box";
import Card from "@component/Card";
import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import Image from "@component/Image";
import NavLink from "@component/nav-link/NavLink";
import { SemiSpan } from "@component/Typography";
import NextImage from "next/image";
import Link from "next/link";
import React from "react";
import { StyledMegaMenu1 } from "./MegaMenuStyle";

const MegaMenu1 = ({
  data: { categories, rightImage, bottomImage },
  minWidth,
}) => {
  return categories ? (
    <StyledMegaMenu1 className="mega-menu">
      <Card ml="1rem" minWidth={minWidth} boxShadow="regular">
        <FlexBox px="1.25rem" py="0.875rem">
          <Box flex="1 1 0">
            <Grid container spacing={4}>
              {categories?.map((item, ind) => (
                <Grid item md={3} key={ind}>
                  {item.href ? (
                    <NavLink className="title-link" href={item.href}>
                      {item.title}
                    </NavLink>
                  ) : (
                    <SemiSpan className="title-link">{item.title}</SemiSpan>
                  )}
                  {item.subCategories?.map((sub) => (
                    <NavLink className="child-link" href={sub.href}>
                      {sub.title}
                    </NavLink>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>

          {rightImage && (
            <Link href={rightImage.href}>
              <a>
                <Box position="relative" width="153px" height="100%">
                  <NextImage
                    src={rightImage.imgUrl}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
              </a>
            </Link>
          )}
        </FlexBox>

        {bottomImage && (
          <Link href={bottomImage.href}>
            <a>
              <Box position="relative" height="170px">
                <NextImage
                  src={bottomImage.imgUrl}
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </a>
          </Link>
        )}
      </Card>
    </StyledMegaMenu1>
  ) : null;
};

MegaMenu1.defaultProps = {
  minWidth: "760px",
};

export default MegaMenu1;