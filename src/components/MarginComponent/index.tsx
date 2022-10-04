import { Flex } from "@chakra-ui/react";
import { Footer } from "@components/footer";
interface MarginPageProps {
  children?: any;
  marginRight?: string | number;
  marginLeft?: string | number;
  marginTop?: string | number;
}

export const MarginPage = (props: MarginPageProps): JSX.Element => {
  const marginRight = props.marginRight ? props.marginRight : "35rem";
  const marginLeft = props.marginLeft ? props.marginLeft : "35rem";
  const marginTop = props.marginTop ? props.marginTop : 16;
  return (
    <Flex
      sx={{
        mr: marginRight,
        ml: marginLeft,
        mt: marginTop,
        flexDirection: "column",
      }}
    >
      {props.children}
      <Footer></Footer>
    </Flex>
  );
};
