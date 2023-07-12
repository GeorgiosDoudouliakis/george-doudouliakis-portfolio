/* Place your angular imports here */
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

/* Place any other imports here */
import { FADE_IN } from '../../animations/fade-in.animation';

interface Skill {
  name: string;
  image: {
    path: string;
    alt: string;
  }
}

@Component({
  selector: 'portfolio-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [NgFor],
  animations: [FADE_IN],
  host: {
    "[@fadeIn]": "true"
  }
})
export class AboutComponent {
  public skills: Skill[] = [
    {
      name: 'HTML',
      image: {
        path: '/assets/images/skills/html_logo.png',
        alt: 'HTML logo'
      }
    },
    {
      name: 'CSS',
      image: {
        path: '/assets/images/skills/css_logo.png',
        alt: 'CSS logo'
      }
    },
    {
      name: 'JavaScript',
      image: {
        path: '/assets/images/skills/js_logo.png',
        alt: 'JavaScript logo'
      }
    },
    {
      name: 'TypeScript',
      image: {
        path: '/assets/images/skills/typescript_logo.png',
        alt: 'TypeScript logo'
      }
    },
    {
      name: 'Angular 2+',
      image: {
        path: '/assets/images/skills/angular_logo.png',
        alt: 'Angular 2+ logo'
      }
    },
    {
      name: 'SASS',
      image: {
        path: '/assets/images/skills/sass_logo.png',
        alt: 'SASS logo'
      }
    }
  ];
}
