export interface Experience {
  id: number;
  period: {
    from: string;
    to: string;
  },
  jobTitle: string;
  company: {
    name: string;
    url: string;
  },
  technologies: string[];
}
