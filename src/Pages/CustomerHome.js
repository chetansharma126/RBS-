import React from "react";

import {
  Flex,
  Box,
  HStack,
  Image,
  AlertDialog,
  AlertDialogHeader,
  Alert,
  AlertIcon,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Input,
  Button,
  Spacer,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function CustomerHome() {
  let navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <Box>
      <nav>
        <Box backgroundColor={"red.200"}>
          <HStack
            paddingTop={3}
            paddingBottom={3}
            paddingLeft={2}
            paddingRight={2}
          >
            <Text fontSize="2xl"> Welcome To easybank</Text>
            <Spacer />
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              Logout
            </Button>
          </HStack>
        </Box>
      </nav>
      <Box
        alignContent="center"
        paddingLeft="500"
        paddingBottom="35"
        paddingTop="35"
      >
        <Heading textColor="purple.400" textDecoration="Highlight">
          Welcome To Withdrawal Page
        </Heading>
      </Box>
      <Box>
        <Flex justify={"space-evenly"}>
          <HStack p="8">
            <Flex
              w={"550px"}
              h={"500px"}
              bg={"gray.400"}
              direction="column"
              wrap={"wrap"}
              borderRadius="10px"
            >
              <Image
                src="https://png.pngtree.com/element_our/20190524/ourlarge/pngtree-cartoon-boy-taking-money-for-free-image_1102936.jpg"
                alt=""
                boxSize={400}
              />
              <Text
                color={"gray.800"}
                fontWeight="semibold"
                fontSize={"md"}
                p="1"
              >
                Withdraw Amount
              </Text>
              <Box paddingLeft="2" paddingRight="2" paddingBottom="1">
                <Input
                  color="blackAlpha.800"
                  background="whiteAlpha.1000"
                  placeholder="Account Id"
                  type="number"
                  size="6px"
                />
                <Input
                  color="blackAlpha.800"
                  background="whiteAlpha.1000"
                  placeholder="Amount"
                  type="number"
                  size="6px"
                />
              </Box>
              <Box>
                <Button
                  onClick={onOpen}
                  colorScheme="red"
                  w={120}
                  h={7}
                  alignSelf="end"
                  marginRight={"6px"}
                  size="lg"
                >
                  Withdraw
                </Button>
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogBody>
                        <Alert>
                          <AlertIcon />
                          Amount Debited from your account Sucessfully
                        </Alert>
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Close
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </Box>
            </Flex>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default CustomerHome;
