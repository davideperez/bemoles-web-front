import axios from "axios";
import { Reserve } from "../models/event";

export const reserveService = {
    createReserve: (reserve: Partial<Reserve>) => axios.post(`/api/reservas`, reserve),
 };