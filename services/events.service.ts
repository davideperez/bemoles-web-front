import axios from "../config/axios";

export const eventService = {
  getEvents: (
    search?: string | undefined,
    page?: string | undefined,
    items?: number | undefined
  ) =>
    axios.get(
      `/api/eventos?${search ? `search=${search}` : ""}${
        page ? `&page=${page}` : ""
      }${items ? `&items=${items}` : ""}`
    ),
};
