import { MarginPage } from "@components/MarginComponent";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

const ContactInput = (props: { type: string; color: string }): JSX.Element => {
  return (
    <Input
      sx={{
        outline: `2px solid ${props.color}`,
        _focus: {
          border: "none",
        },
        _active: {
          border: "none",
        },
      }}
      name="name"
    />
  );
};

export const Contact = (): JSX.Element => {
  const color = useColorModeValue("black", "white");

  return (
    <MarginPage>
      <Heading size={"3xl"}>Contact</Heading>
      <form action="https://formsubmit.co/gbcostasant@gmail.com" method="POST">
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <ContactInput type="text" color={color} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <ContactInput type="email" color={color} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            rows={5}
            resize={"none"}
            sx={{
              outline: `2px solid ${color}`,
              _focus: {
                border: "none",
              },
              _active: {
                border: "none",
              },
            }}
          />
        </FormControl>
        <FormControl>
          <Input type="submit" />
        </FormControl>
      </form>
    </MarginPage>
  );
};
