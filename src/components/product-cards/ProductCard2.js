import HoverBox from "@component/HoverBox";
import { H4 } from "@component/Typography";
import NextImage from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard2 = ({
  imgUrl,
  title,
  price,
  productUrl,
}) => {
  return (
    <Link href={productUrl}>
      <a>
        <HoverBox borderRadius={8} mb="0.5rem">
          <NextImage
            src={imgUrl}
            width={100}
            height={100}
            layout="responsive"
            alt={title}
          />
        </HoverBox>
        <H4 fontWeight="600" fontSize="14px" mb="0.25rem">
          {title}
        </H4>
        <H4 fontWeight="600" fontSize="14px" color="primary.main">
          ${Math.ceil(price).toLocaleString()}
        </H4>
      </a>
    </Link>
  );
};

export default ProductCard2;
