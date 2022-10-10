import { MarginPage } from "@components/MarginComponent";
import {
  Heading,
  FormControl,
  Input,
  Textarea,
  useColorModeValue,
  Button,
  Flex,
} from "@chakra-ui/react";

const ContactInput = (props: {
  type: string;
  color: string;
  placeholder: string;
}): JSX.Element => {
  return (
    <Input
      sx={{
        outline: `2px solid ${props.color}`,
        border: "none",
        _focus: {
          border: "none",
        },
        _placeholder: {
          color: props.color,
        },
      }}
      name="name"
      placeholder={props.placeholder}
    />
  );
};

export const Contact = (): JSX.Element => {
  const color = useColorModeValue("black", "white");
  const textButtonColor = useColorModeValue("white", "black");

  return (
    <MarginPage>
      <Heading size={"3xl"}>Contact</Heading>
      <form
        action="https://formsubmit.co/gbcostasant@gmail.com"
        method="POST"
        style={{ marginTop: "1rem" }}
      >
        <Flex sx={{ flexDir: "column", maxWidth: 450 }}>
          <FormControl isRequired sx={{ mt: 6 }}>
            <ContactInput placeholder="Name" type="text" color={color} />
          </FormControl>
          <FormControl isRequired sx={{ mt: 6 }}>
            <ContactInput placeholder="Email" type="email" color={color} />
          </FormControl>
          <FormControl isRequired>
            <Textarea
              rows={5}
              resize={"none"}
              placeholder={"Message"}
              sx={{
                outline: `2px solid ${color}`,
                border: "none",
                mt: 6,
                _focus: {
                  border: "none",
                },
                _placeholder: {
                  color: color,
                },
              }}
            />
          </FormControl>
          <FormControl>
            <Button
              type="submit"
              sx={{
                color: textButtonColor,
                bgColor: color,
                borderRadius: 0,
                mt: 8,
                _hover: {
                  bgColor: "",
                  color: "",
                },
                _active: {
                  bgColor: "",
                  color: "",
                },
              }}
            >
              Send Message
            </Button>
          </FormControl>
        </Flex>
      </form>
    </MarginPage>
  );
};
