"use strict";


/** Toggle Class  **/
function toggleClass(element, className) {
  if (!element || !className) {
    return;
  }
  var classString = element.className, nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    classString += '' + className;
  }
  else {
    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
  }
  element.className = classString;
}

/** Find Parent with specific Class **/
function findParent(el, cls) {
  while (el) {
    if ( el.matches(cls) ) {
      return el;
    }
    el = el.parentNode;
  }
}
