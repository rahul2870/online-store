import HoverBox from "@component/HoverBox";
import NextImage from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../Card";
import FlexBox from "../FlexBox";
import { H6, SemiSpan } from "../Typography";


const ProductCard8 = ({
  id,
  imgUrl,
  price,
  title,
  ...props
}) => {
  return (
    <Card p="1rem" {...props}>
      <Link href={`/product/${id}`}>
        <a>
          <HoverBox mb="0.75rem" borderRadius={8} overflow="hidden">
            <NextImage
              src={imgUrl || "/assets/images/products/Rectangle 116.png"}
              width={500}
              height={500}
              layout="responsive"
              objectFit="contain"
              objectPosition="center"
            />
          </HoverBox>
          <SemiSpan
            title={title}
            mb="0.25rem"
            color="inherit"
            ellipsis
            display="block"
          >
            {title}
          </SemiSpan>
          <FlexBox alignItems="center">
            <H6 color="primary.main" mr="0.25rem">
              ${price}
            </H6>
            <SemiSpan>
              <del>$1600</del>
            </SemiSpan>
          </FlexBox>
        </a>
      </Link>
    </Card>
  );
};

export default ProductCard8;
