import React from "react";
import {
  VStack,
  Box,
  Button,
  Flex,
  Image,
  Text,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  let navigate = useNavigate();
  return (
    <div>
      <Text
        align={"center"}
        fontSize="5xl"
        fontWeight={"extrabold"}
        color="blue"
      >
        Welcome to easybank
      </Text>
      <Flex justify={"space-evenly"} wrap={"wrap"}>
        <VStack p="20">
          <Flex
            w={"320px"}
            h={"450px"}
            bg={"gray.400"}
            direction="column"
            wrap={"wrap"}
            borderRadius="10px"
          >
            <Image
              borderRadius="10px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71QFTpNXwkvZ_rmKE42vQ4331HKNzFFxJxQ&usqp=CAU"
              alt="Dan Abramov"
              boxSize={320}
            />
            <Text
              color={"gray.800"}
              fontWeight="semibold"
              fontSize={"md"}
              p="1"
            >
              Create Customer
            </Text>
            <Text color={"gray.500"} fontWeight="italic" fontSize={"sm"} p="2">
              Click the button to create the customer
            </Text>
            <Button
              colorScheme="teal"
              w={100}
              alignSelf="end"
              marginRight={"6px"}
              onClick={() => {
                navigate("/Createcust");
              }}
            >
              Create
            </Button>
          </Flex>
        </VStack>

        <VStack p="20">
          <Flex
            w={"320px"}
            h={"450px"}
            bg={"gray.400"}
            direction="column"
            wrap={"wrap"}
            borderRadius="10px"
          >
            <Image
              borderRadius="10px"
              src="https://digitalapicraft.com/wp-content/webpc-passthru.php?src=https://digitalapicraft.com/wp-content/uploads/2022/01/Open-banking-global-maturity-blog-banner-1-1024x408.png&nocache=1"
              alt="Dan Abramov"
              boxSize={320}
            />
            <Text
              color={"gray.800"}
              fontWeight="semibold"
              fontSize={"md"}
              p="1"
            >
              Create Account for Customer
            </Text>
            <Flex>
              <Text
                color={"gray.500"}
                fontWeight="italic,semibold"
                fontSize={"sm"}
                p="2"
              >
                Customer ID:
              </Text>
              <Input
                bg="white"
                color="black"
                placeholder="Customer ID"
                size="sm"
              />
            </Flex>
            <Button
              colorScheme="teal"
              w={200}
              alignSelf="end"
              marginRight={"6px"}
              onClick={onOpen}
            >
              Create Account
            </Button>
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Create Account
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    <Alert status="success" variant="solid">
                      <AlertIcon />
                      Successfully Done!!
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
          </Flex>
        </VStack>

        <VStack p="20">
          <Flex
            w={"320px"}
            h={"450px"}
            bg={"gray.400"}
            direction="column"
            wrap={"wrap"}
            borderRadius="10px"
          >
            <Image
              borderRadius="10px"
              src="https://cdn0.iconfinder.com/data/icons/reject-filled-color/64/reject_cross_cancel_remove_consent_stamp0-512.png"
              alt="Dan Abramov"
              boxSize={320}
            />
            <Text
              color={"gray.800"}
              fontWeight="semibold"
              fontSize={"md"}
              p="1"
            >
              Delete Customer
            </Text>
            <Flex>
              <Text
                color={"gray.500"}
                fontWeight="italic"
                fontSize={"sm"}
                p="2"
              >
                Customer ID:
              </Text>
              <Input
                bg="white"
                color="black"
                placeholder="Enter the Customer ID"
                size="sm"
              />
            </Flex>
            <Button
              colorScheme="red"
              w={100}
              alignSelf="end"
              marginRight={"6px"}
              onClick={onOpen}
            >
              Delete
            </Button>
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    {/* Delete Customer */}
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    <Alert status="success" variant="solid">
                      <AlertIcon />
                      Successfully Done!!
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
          </Flex>
        </VStack>
        <VStack p="20">
          <Flex
            w={"320px"}
            h={"450px"}
            bg="gray.400"
            direction="column"
            wrap={"wrap"}
            borderRadius="10px"
          >
            <Image
              borderRadius="10px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&usqp=CAU"
              alt="Dan Abramov"
              boxSize={320}
            />
            <Text
              color={"gray.800"}
              fontWeight="semibold"
              fontSize={"md"}
              p="1"
            >
              View the Customer
            </Text>
            <Flex>
              <Text
                color={"gray.500"}
                fontWeight="italic"
                fontSize={"sm"}
                p="2"
              >
                User ID:
              </Text>
              <Input
                bg="white"
                color="black"
                placeholder="Enter the User ID"
                size="sm"
              />
            </Flex>
            <Button
              colorScheme="blue"
              w={150}
              alignSelf="end"
              marginRight={"6px"}
              onClick={() => {
                navigate("/CustomerDetails");
              }}
            >
              View Customer
            </Button>
          </Flex>
        </VStack>
        <VStack p="20">
          <Flex
            w={"320px"}
            h={"510px"}
            bg={"gray.400"}
            direction="column"
            wrap={"wrap"}
            borderRadius="10px"
          >
            <Image
              borderRadius="10px"
              src="https://img.freepik.com/free-vector/saving-money-icon-safe-deposit-box-money-stack-coins-business-icon-isolated_138676-519.jpg?w=2000"
              alt="Dan Abramov"
              boxSize={320}
            />
            <Text
              color={"gray.800"}
              fontWeight="semibold"
              fontSize={"md"}
              p="1"
            >
              Deposit Amount
            </Text>
            <Flex>
              <Text
                color={"gray.500"}
                fontWeight="italic"
                fontSize={"sm"}
                p="2"
              >
                Account ID:
              </Text>
              <Input
                bg="white"
                color="black"
                placeholder="Enter the Account ID"
                size="xs"
              />
            </Flex>
            <Flex>
              <Text
                color={"gray.500"}
                fontWeight="italic"
                fontSize={"sm"}
                p="2"
              >
                Amount :
              </Text>
              <Input
                bg="white"
                color="black"
                placeholder="Enter the Amount"
                size="xs"
              />
            </Flex>
            <Button
              colorScheme="blue"
              w={150}
              alignSelf="end"
              marginRight={"6px"}
              onClick={onOpen}
            >
              Deposit Amount
            </Button>
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    {/* Delete Customer */}
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    <Alert status="success" variant="solid">
                      <AlertIcon />
                      Successfully Done!!
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
          </Flex>
        </VStack>
        <VStack p="20">
          <Flex
            w={"320px"}
            h={"450px"}
            bg={"gray.400"}
            direction="column"
            wrap={"wrap"}
            borderRadius="10px"
          >
            <Image
              borderRadius="10px"
              src="data:image/png;base64,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"
              alt="Dan Abramov"
              boxSize={320}
            />
            <Text
              color={"gray.800"}
              fontWeight="semibold"
              fontSize={"md"}
              p="1"
            >
              Service Charge Deduction
            </Text>
            <Text color={"gray.500"} fontWeight="italic" fontSize={"sm"} p="2">
              Charges will be deducted for not maintaining minimum balance
            </Text>
            <Button
              colorScheme="red"
              w={100}
              alignSelf="end"
              marginRight={"6px"}
            >
              Deduct
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </div>
  );
}

export default Home;
