import styled from "styled-components";
import {
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridTemplateColumnsProps,
} from "styled-system";

const CssGrid = styled.div(
  ({ gridTemplateColumns, columnCount, spacing }) => {
    let columnWidth = 100 / (columnCount + 1);

    return {
      display: "grid",
      gridTemplateColumns:
        gridTemplateColumns ||
        `repeat(auto-fill, minmax(max(${columnWidth}%, 250px), 1fr))`,
      gap: `calc(0.25rem * ${spacing})`,
    };
  },
  compose(grid, flexbox)
);

export default CssGrid;
