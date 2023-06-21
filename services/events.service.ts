import axios from "../config/axios";
import { Event } from "../models/event";

export const eventService = {
  getEvents: (
    search?: string | undefined,
    page?: number | undefined,
    items?: number | undefined
  ) =>
    axios.get(
      `/api/eventos?${search ? `search=${search}` : ""}${
        page ? `&page=${page}` : ""
      }${items ? `&items=${items}` : ""}`
    ),
  getEvent: (id: string) => axios.get(`/api/eventos/${id}`),
  createEvent: (event: FormData) => axios.post(`/api/eventos`, event),
  updateEvent: (id: string, event: FormData) => axios.put(`/api/eventos/${id}`, event),
  deleteEvent: (id: string) => axios.delete(`/api/eventos/${id}`),
};
