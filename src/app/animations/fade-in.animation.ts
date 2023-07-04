/* Place your angular imports here */
import { trigger, style, transition, animate } from "@angular/animations";

export const FADE_IN = trigger("fadeIn", [
    transition(":enter", [
        style({ opacity: 0 }),
        animate("1s", style({ opacity: 1 }))
    ])
]);