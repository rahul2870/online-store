import Box from "@component/Box";
import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard1 from "../product-cards/ProductCard1";
import { productsList } from '../../data/custom-database';

const Section2 = () => {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);

  return (
    <CategorySectionCreator
      iconName="light"
      title="Flash Deals"
      seeMoreLink="#"
    >
      <Box mt="-0.25rem" mb="-0.25rem">
        <Carousel totalSlides={10} visibleSlides={visibleSlides}>
          {productsList.map((item, ind) => (
            <Box py="0.25rem" key={ind}>
              <ProductCard1
                id={ind}
                imgUrl={item.imgs[0]}
                title={item.title}
                rating={item?.rating || 4}
                price={item?.price || 199}
                off={item?.offPrice || 149}
                productId={item?.id}
                key={ind}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};


export default Section2;
