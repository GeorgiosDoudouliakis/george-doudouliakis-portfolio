/* Place your interface imports here */
import { Experience } from "../interfaces/experience.interface";

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    period: {
      from: "March 2022",
      to: "Present"
    },
    jobTitle: "Front End Web Developer",
    company: {
      name: "Schoox, Inc",
      url: "https://www.schoox.com/"
    },
    technologies: ["AngularJS", "Angular 2+", "Bootstrap", "Tailwind", "NG-ZORRO"]
  },
  {
    id: 2,
    period: {
      from: "April 2021",
      to: "January 2022"
    },
    jobTitle: "Front End Web Developer",
    company: {
      name: "KissMyButton",
      url: "https://kissmybutton.gr/"
    },
    technologies: ["Angular 2+", "Angular Material"]
  }
];
