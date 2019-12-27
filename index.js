const ELEMENT_SELECTOR = "._5j_u._30yy._4rv9._6ymq._7v3t";

// controls the size of the emoji sent
const CLICK_LENGTH = 100;
// controls the total number of emojis to send before the program quits
const CLICK_COUNT = 1000;
// controls the amount of delay in between emoji clicks
const CLICK_DELAY = 500;

let ele = $$(ELEMENT_SELECTOR)[0];

let simulateMouseEvent = (element, eventName, coordX, coordY) => {
  element.dispatchEvent(new MouseEvent(eventName, {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: coordX,
    clientY: coordY,
    button: 0
  }));
};

let box = ele.getBoundingClientRect();
let coordX = box.left + (box.right - box.left) / 2;
let coordY = box.top + (box.bottom - box.top) / 2;

let myClick = () => {
  simulateMouseEvent (ele, "mousedown", coordX, coordY);
  setTimeout(() => {
    simulateMouseEvent (ele, "mouseup", coordX, coordY);
  }, CLICK_LENGTH);
};

let timeoutP = t => {
  return new Promise(resolve => {
    setTimeout(() => { resolve(); }, t);
  });
};

(async () => {
  for(let i = 0; i < CLICK_COUNT; i++) {
    myClick();
    await timeoutP(CLICK_DELAY);
  }
})();
