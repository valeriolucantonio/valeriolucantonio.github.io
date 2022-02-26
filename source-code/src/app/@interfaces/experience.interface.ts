export interface Experience {
  title: string;
  sections: ExperienceSection[];
}

export interface ExperienceSection {
  image: string;
  date: string;
  role: string;
  company: string;
  companyWebsite: string;
  place: string;
  description: string;
  technologies: string[];
  reponsabilities: string[];
}
