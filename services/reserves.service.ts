import axios from "axios";
import { Reserve } from "../models/event";

export const reserveService = {
    getFeedbackReserve: (paymentId: string) => axios.get(`/api/reservas/feedback?payment_id=${paymentId}`),
    getReservePayments: (reserveId: string) => axios.get(`/api/reservas/${reserveId}/payment`),
    createReserve: (reserve: Partial<Reserve>) => axios.post(`/api/reservas`, reserve),
 };