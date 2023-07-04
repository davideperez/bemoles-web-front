import axios from "../config/axios";

export const projectService = {
    getProjects: (
      search?: string | undefined,
      page?: number | undefined,
      items?: number | undefined
    ) =>
      axios.get(
        `/api/proyectos?${search ? `search=${search}` : ""}${
          page ? `&page=${page}` : ""
        }${items ? `&items=${items}` : ""}`
      ),
    getProject: (id: string) => axios.get(`/api/proyectos/${id}`),
    createProject: (event: FormData) => axios.post(`/api/proyectos`, event),
    updateProject: (id: string, event: FormData) => axios.put(`/api/proyectos/${id}`, event),
    deleteProject: (id: string) => axios.delete(`/api/proyectos/${id}`),
  };
  