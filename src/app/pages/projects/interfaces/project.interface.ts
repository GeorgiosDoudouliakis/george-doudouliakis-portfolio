export interface Project {
  name: string;
  description: string;
  technologies: string[];
  imagePath: string;
  links: {
    github: string;
    preview?: string;
  };
}
