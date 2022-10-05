import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

interface Footer {
  children: React.ReactNode;
  label: string;
  href: string;
}

export default function SmallWithSocial() {
  return (
    <Box
      border="solid yellow"
      position="relative"
      top="50px"
      marginTop="5rem"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Flex justify="center">
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
        </Container>
      </Flex>
    </Box>
  );
}
