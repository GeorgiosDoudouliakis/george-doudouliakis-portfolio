/* Place your angular imports here */
import { Project } from "../interfaces/project.interface";

export const PROJECTS: Project[] = [
  {
    name: "Formula One",
    description: "Website with stats about formula one from 1950 to 2021. Driver/Constructor details, standings, circuits, statistics showing points per circuit, map with the location of each circuit and schedule.",
    technologies: ["Angular", "Angular Material", "Open Layers"],
    imagePath: "assets/images/projects/formula_one.png",
    links: {
      preview: 'https://georgiosdoudouliakis.github.io/formula-one/',
      github: 'https://github.com/GeorgiosDoudouliakis/formula-one'
    }
  },
  {
    name: "Food Blog",
    description: "Website which contains recipes from around the world. The user can search for a recipe, find meals depending on the country or the category it belongs to.",
    technologies: ["Angular", "html-to-image"],
    imagePath: "assets/images/projects/food_blog.png",
    links: {
      github: 'https://github.com/GeorgiosDoudouliakis/food-blog'
    }
  }
];
