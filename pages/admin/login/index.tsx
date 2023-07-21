import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import Logo from "../../../components/admin/Login/Logo";
import { PasswordField } from "../../../components/admin/Login/PasswordField";
import { Formik, Field } from "formik";
import { useFormik } from "formik";
import { authService } from "../../../services/auth.service";
import { UserContext } from "../../../context/userContext";
import { useRouter } from "next/router";
import { setToken } from "../../../config/localStorage";
import { AxiosError } from "axios";

const AdminLoginPage = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const toast = useToast();

  const handleSubmit = async (userCredentials: {
    username: string;
    password: string;
  }) => {
    try {
      const { data: userData } = await authService.login(userCredentials);
      if (userData) {
        setUser(userData);
        setToken(userData.token)
        console.log({ userData });
        router.push("/");
      }
    } catch (error) {
      if ((error as AxiosError)?.response?.status === 401) {
        toast({
          status: 'error',
          description: "Las credenciales son incorrectas"
        })
      }
      console.log(error);
    }
  };

  useEffect(() => {
    if (user.token) router.replace('/admin/events');
  }, [router, user])

  return (
    <Container
      background="#3B424A"
      width="100%"
      min-width="100v"
      display="flex"
      minHeight="100v"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        spacing="8"
        p={8}
        bg="white"
        boxShadow={{ base: "none", sm: "md" }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack spacing="6">
          <Logo p={12} />
        </Stack>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box pb={{ base: "0", sm: "8" }} px={{ base: "4", sm: "10" }}>
                <Stack spacing="6">
                  <Stack spacing="5">
                    <FormControl>
                      <FormLabel htmlFor="username">Email</FormLabel>
                      <Field as={Input} id="username" name="username" type="email" />
                    </FormControl>
                    <PasswordField />
                  </Stack>
                  <Stack spacing="6">
                    <Button
                      colorScheme={"messenger"}
                      bg="#9D6E33"
                      _hover={{ bg: "#9D6E33", opacity: 0.5 }}
                      type="submit"
                    >
                      Ingresar
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </form>
          )}
        </Formik>
      </Stack>
    </Container>
  );
};

export default AdminLoginPage;
