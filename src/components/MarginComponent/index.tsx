import { Flex } from "@chakra-ui/react";
import { Footer } from "@components/footer";
interface MarginPageProps {
  children?: any;
  marginRight?: string | number;
  marginLeft?: string | number;
  marginTop?: string | number;
}

export const MarginPage = (props: MarginPageProps): JSX.Element => {
  const marginTop = props.marginTop ? props.marginTop : 16;
  return (
    <Flex
      sx={{
        mr: ["1rem", "3rem", "10rem", "15rem", "20rem", "30rem"],
        ml: ["1rem", "3rem", "10rem", "15rem", "20rem", "30rem"],
        mt: marginTop,
        flexDirection: "column",
      }}
    >
      {props.children}
      <Footer></Footer>
    </Flex>
  );
};
