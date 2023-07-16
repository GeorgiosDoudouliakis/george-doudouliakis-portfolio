/* Place your angular imports here */
import { trigger, style, transition, animate } from "@angular/animations";

export const SHOW_MODAL = trigger("showModal", [
  transition(":enter", [
    style({ opacity: 0, transform: 'scale(0)' }),
    animate(".3s", style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);
