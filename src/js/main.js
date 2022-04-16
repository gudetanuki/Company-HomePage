import { openAnswer, closeAnswer } from "./accordion.js";
import { updateObserver } from "./observer.js";
import { toggleHamburgerMenu } from "./hamburger.js";

window.openAnswer = openAnswer;
window.closeAnswer = closeAnswer;
updateObserver();
toggleHamburgerMenu();
