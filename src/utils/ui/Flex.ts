import React, { CSSProperties, ReactNode } from "react";

interface FlexProps {
  as?: keyof JSX.IntrinsicElements;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const Flex = (props: FlexProps) => {
  const {
    as = "div",
    direction = "row",
    justify = "flex-start",
    align = "stretch",
    wrap = "nowrap",
    gap = "0",
    style,
    children,
  } = props;

  const flexContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    gap,
    ...style,
  };

  return React.createElement(as, { style: flexContainerStyle }, children);
};

export default Flex;
