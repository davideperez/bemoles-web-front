import axios from "../config/axios";

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
};
