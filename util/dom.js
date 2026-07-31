import { JSDOM } from "jsdom";
import DOMPurify from 'dompurify';

let purify;

function getDOMPurify() {
  const window = new JSDOM("").window;
  const purify = DOMPurify(window);
  return purify;
}

function sanitize(input) {
  if (!purify) {
    purify = getDOMPurify();
  }
  return purify.sanitize(input);
}

export {
  sanitize,
}

