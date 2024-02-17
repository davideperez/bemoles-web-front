import React, { FC, useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tooltip,
  Button,
  useDisclosure,
  Stack,
  Text,
  Flex,
  Center,
  Spinner,
  Badge,
} from "@chakra-ui/react";
import { PaymentDetail } from "../../../../models/event";
import { AiOutlineEye } from "react-icons/ai";
import { config } from "process";
import { reserveService } from "../../../../services/reserves.service";
import { formatDate, formatDateTime, getPaymentStatusText } from "../../../../utils/functions";
import { PAYMENT_STATUS } from "../../../../models/enums/paymentStatus";

interface Props {
  reserveId: string;
  isDisabled: boolean;
}

const PaymentDetailModal: FC<Props> = ({ reserveId, isDisabled }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [payments, setPayments] = useState<PaymentDetail[]>();

  useEffect(() => {
    if (typeof window !== "undefined" && isOpen) {
      (async () => {
        try {
          const { data: result } = await reserveService.getReservePayments(
            reserveId
          );
          setPayments(result);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [reserveId, isOpen]);

  return (
    <>
      <Tooltip label="Ver estado del pago">
        <Button onClick={onOpen} size="md" bg="transparent" p={0} isDisabled={isDisabled}>
          <AiOutlineEye color="#9D6E33" size={22} />
        </Button>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent p="2">
          <ModalHeader>Detalle del pago</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb="1rem" px="10" mt="1">
            {payments ? (
              <Stack spacing="2rem">
                {payments.map((paymentDetail) => (
                  <Stack key={paymentDetail._id}>
                    <Flex alignItems="center">
                      <Text as="span" fontWeight={600} mr={2}>
                        Estado del pago:{" "}
                      </Text>
                      <Badge
                      fontSize="0.8em"
                        colorScheme={
                          getPaymentStatusText(paymentDetail.status).color
                        }
                      >
                        {getPaymentStatusText(paymentDetail.status).text}
                      </Badge>
                    </Flex>
                    <Flex>
                      <Text as="span" fontWeight={600} mr={2}>
                        Precio:{" "}
                      </Text>
                      <Text as="span">${paymentDetail.total_amount}</Text>
                    </Flex>
                    <Flex>
                      <Text as="span" fontWeight={600} mr={2}>
                        Monto neto recibido:{" "}
                      </Text>
                      <Text as="span">
                        ${paymentDetail.net_received_amount}
                      </Text>
                    </Flex>
                    <Flex>
                      <Text as="span" fontWeight={600} mr={2}>
                        Fecha de creación del pago:{" "}
                      </Text>
                      <Text as="span">
                        {paymentDetail.date_created
                          ? formatDateTime(paymentDetail.date_created)
                          : "-"}
                      </Text>
                    </Flex>
                    <Flex>
                      <Text as="span" fontWeight={600} mr={2}>
                        Fecha de aprobación del pago:{" "}
                      </Text>
                      <Text as="span">
                        {paymentDetail.date_approved
                          ? formatDateTime(paymentDetail.date_approved)
                          : "-"}
                      </Text>
                    </Flex>
                    <Flex>
                      <Text as="span" fontWeight={600} mr={2}>
                        Fecha de ultima actualización del pago:{" "}
                      </Text>
                      <Text as="span">
                        {paymentDetail.date_last_updated
                          ? formatDateTime(paymentDetail.date_last_updated)
                          : "-"}
                      </Text>
                    </Flex>
                    <Stack pt="5" spacing="3">
                      <Text as="span" fontWeight={600}>
                        Datos del cliente:
                      </Text>
                      <Stack px="5">
                        <Flex>
                          <Text as="span" fontWeight={600} mr={2}>
                            Email del cliente:{" "}
                          </Text>
                          <Text as="span">{paymentDetail.client_email}</Text>
                        </Flex>
                        <Flex>
                          <Text as="span" fontWeight={600} mr={2}>
                            Telefono del cliente:{" "}
                          </Text>
                          <Text as="span">
                            {paymentDetail.client_phone.number
                              ? `${paymentDetail.client_phone.area_code} ${paymentDetail.client_phone.number}`
                              : "-"}
                          </Text>
                        </Flex>
                      </Stack>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            ) : (
              <Center h="100%">
                <Spinner color="#DDC692" size="xl" thickness="4px" />
              </Center>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PaymentDetailModal;
