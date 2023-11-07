import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import ProductCard1 from "@component/product-cards/ProductCard1";
import { H2 } from "@component/Typography";
import { productsList } from "@data/custom-database";
import productDatabase from "@data/product-database";
import React from "react";

const Section7 = () => {
  return (
    <Box mb="3.75rem">
      <H2 mb="1.5rem">Trending Items</H2>

      <Grid container spacing={6}>
        <Grid item md={4} xs={12}>
          <ProductCard1
            id="3425442"
            title="KSUS ROG Strix G15"
            price={1100}
            off={null}
            imgUrl={productsList[0].imgs[0]}
          />
        </Grid>
        <Grid item md={8} xs={12}>
          <Grid container spacing={6}>
            {productsList.slice(0, 2).map((item) => (
              <Grid item lg={4} sm={6} xs={12}
                key={item.title}>
                <ProductCard1
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  imgUrl={item.imgs[0]}
                  off={(item?.offPrice || 100) * 10}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section7;
