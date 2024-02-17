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
  createProject: (project: FormData) => axios.post(`/api/proyectos`, project),
  updateProject: (id: string, project: FormData) => axios.put(`/api/proyectos/${id}`, project),
  deleteProject: (id: string) => axios.delete(`/api/proyectos/${id}`),
};