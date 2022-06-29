import React from "react";
import {
  Box,
  HStack,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Link,
  Button,
  Heading,
  Text,
  FormErrorMessage,
  FormHelperText,
  useColorModeValue,
} from "@chakra-ui/react";

function CustomerTransactionDetails() {
  return (
    <Box>
      <nav>
        <Box backgroundColor={"blue.200"}>
          <HStack
            paddingTop={3}
            paddingBottom={3}
            paddingLeft={2}
            paddingRight={2}
          >
            <Text fontSize="2xl">Retail Bank</Text>
            <Spacer />
            <Button>Home</Button>
          </HStack>
        </Box>
      </nav>
    </Box>
  );
}

export default CustomerTransactionDetails;
