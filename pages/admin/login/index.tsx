import React, { useEffect, useRef, useState } from "react";
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
} from "@chakra-ui/react";
import Logo from "../../../components/Login/Logo";
import { PasswordField } from "../../../components/Login/PasswordField";
import { Formik, Field } from "formik";
import { useFormik } from "formik";

const AdminLoginPage = () => {
  

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
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit}) => (
            <form onSubmit={handleSubmit}>
        <Box pb={{ base: "0", sm: "8" }} px={{ base: "4", sm: "10" }}>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Field as={Input} id="email" name="email" type="email" />
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
        </form>)}
        </Formik>
      </Stack>
    </Container>
  );
};

export default AdminLoginPage;
