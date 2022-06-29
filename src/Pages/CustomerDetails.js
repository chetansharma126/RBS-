import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Input,
  useDisclosure,
  HStack,
  Spacer,
  Button,
  Text,
  FormHelperText,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function CustomerDetails() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();
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
            <Text fontSize="2xl">easybank</Text>
            <Spacer />
            <Button
              onClick={() => {
                navigate("/EmployeeHome");
              }}
            >
              Home
            </Button>
          </HStack>
        </Box>
      </nav>
      <Box
        paddingTop="25"
        paddingBottom="26"
        paddingLeft="506"
        paddingRight="506"
      >
        <Box
          borderColor="blackAlpha.600"
          borderWidth="1px"
          borderRadius="lg"
          padding="2"
        >
          <FormControl>
            <FormLabel htmlFor="Customer Id">Customer Id</FormLabel>
            <Input id="Customer Id" type="number" />
            <FormHelperText>We'll never share your Customer Id.</FormHelperText>
            <FormLabel htmlFor="Username">Username</FormLabel>
            <Input id="Username" placeholder=" Username" type="text" />
            <FormLabel htmlFor="Password">Password</FormLabel>
            <Input id="Password" placeholder="Password" type="password" />
            <FormLabel htmlFor="Date Of Birth">Date Of Birth</FormLabel>
            <Input id="DOB" placeholder="DOB" type="date" />
            <FormLabel htmlFor="Pan Number">Pan Number</FormLabel>
            <Input id="Pan Number" placeholder="Pan Number" type="text" />
            <FormLabel htmlFor="Address">Address</FormLabel>
            <Input id="Address" placeholder="Address" type="text" />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}

export default CustomerDetails;
