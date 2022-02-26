export interface Projects {
  title: string;
  projects: Project[];
}

export interface Project {
  name: string;
  date: string;
  link: string;
  description: string;
  technologies: string[];
}
