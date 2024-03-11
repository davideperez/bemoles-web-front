import axios from "../config/axios";

export const eventService = {
  getEvents: (
    isWorkshop?: boolean,
    search?: string | undefined,
    page?: number | undefined,
    items?: number | undefined,
    active?: string | undefined,
    upcoming?: string | undefined,
    published?: string | undefined
  ) =>
    axios.get(
      `/api/eventos?isWorkshop=
          ${isWorkshop}&
          ${search ? `search=${search}` : ""}
          ${page ? `&page=${page}` : ""}
          ${items ? `&items=${items}` : ""}
          ${active ? `&active=${active}` : ""}
          ${upcoming ? `&upcoming=${upcoming}` : ""}
          ${published ? `&published=${published}` : ""}`
    ),
  getEvent: (id: string) => axios.get(`/api/eventos/${id}`),
  createEvent: (event: FormData) => axios.post(`/api/eventos`, event),
  updateEvent: (id: string, event: FormData) => axios.put(`/api/eventos/${id}`, event),
  updateEventStatus: (id: string, type: string) => axios.put(`/api/eventos/${id}/toggle-status?type=${type || ''}`),
  deleteEvent: (id: string) => axios.delete(`/api/eventos/${id}`),
};