export type Project = {
  _id: string;
  title: string;
  pdf: string;
  image: string;
  category: ProjectCategory;
  active: boolean;
  createdAt: Date;
};

export enum ProjectCategory {
    ANUALES="ANUALES",
    SOLICITANDO_APOYOS= 'SOLICITANDO_APOYOS',
    NUESTROS_PROYECTOS="NUESTROS_PROYECTOS",
    INFORMES="INFORMES"
}
