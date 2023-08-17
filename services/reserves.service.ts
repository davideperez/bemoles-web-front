import axios from "axios";
import { Reserve } from "../models/event";

export const reserveService = {
    getFeedbackReserve: (paymentId: string) => axios.get(`/api/reservas/feedback?payment_id=${paymentId}`),
    createReserve: (reserve: Partial<Reserve>) => axios.post(`/api/reservas`, reserve),
 };