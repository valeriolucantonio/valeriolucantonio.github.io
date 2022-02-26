export interface Education {
  title: string;
  sections: EducationSection[];
}

export interface EducationSection {
  date: string;
  degree: string;
  field: string;
  vote: string;
  university: string;
  universityWebsite: string;
  place: string;
  description: string;
  achievements: string[];
}
