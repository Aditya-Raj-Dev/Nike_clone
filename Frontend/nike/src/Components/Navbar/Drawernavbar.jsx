import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { GetLogoutSuccess } from "../../Redux/Authreducer/action";
import { useToast } from "@chakra-ui/react";
export const Drawernavbar = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state) => state.authReducer);

  return (
    <>
      <Icon w={"28px"} h={"28px"} mr={"-10px"} onClick={onOpen} as={BiMenu} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {user.isAuth ? (
            <DrawerHeader>
              Welcome {user.user}{" "}
              <p
                onClick={() => {
                  dispatch(GetLogoutSuccess(toast));
                }}
              >
                Logout
              </p>
            </DrawerHeader>
          ) : (
            <DrawerHeader>
              <Link to="/login" onClick={onClose}>
                Login
              </Link>{" "}
              /
              <Link to="/signup" onClick={onClose}>
                Signup
              </Link>
            </DrawerHeader>
          )}
          <Divider />
          <DrawerBody>
            <img
              src="https://www.freeiconspng.com/thumbs/nike-logo/logo-brand-nike-png-10.png"
              style={{ marginBottom: "10px" }}
              alt="Nike"
              height="60px"
              width="60px"
            />
            <VStack
              mt={"40px"}
              alignItems="left"
              spacing="10px"
              onClick={onClose}
            >
              <Link to="/">
                <Heading as="h3" size="lg" display="inline-flex" gap="5rem">
                  HOME
                </Heading>
              </Link>

              <Link to="/men">
                <Heading as="h3" size="lg" display="flex" gap="5rem">
                  MEN
                </Heading>
              </Link>

              <Link to="/women">
                <Heading as="h3" size="lg" display="flex" gap="5rem">
                  WOMEN
                </Heading>
              </Link>

              <Link to="/kids">
                <Heading as="h3" size="lg" display="flex" gap="5rem">
                  KIDS
                </Heading>
              </Link>

              <Link to="/favourite">
                <Heading as="h3" size="lg" display="flex" gap="5rem">
                  FAVOURITE
                </Heading>
              </Link>

              <Link to="/cart">
                <Heading as="h3" size="lg" display="flex" gap="5rem">
                  CART
                </Heading>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
