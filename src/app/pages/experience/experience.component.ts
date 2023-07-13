/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place any other imports here */
import { FADE_IN } from "../../animations/fade-in.animation";

interface Experience {
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

@Component({
  selector: 'portfolio-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [CommonModule],
  animations: [FADE_IN],
  host: {
    "[@fadeIn]": "true"
  }
})
export class ExperienceComponent {
  public experiences: Experience[] = [
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
}
