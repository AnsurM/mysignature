const sign = document.querySelector(".cls-1");
const length = sign.getTotalLength();

sign.setAttribute("stroke-dasharray", length);
sign.setAttribute("stroke-dashoffset", length);

let offset = length;

const drawArrow = () => {
  sign.setAttribute("stroke-dashoffset", offset);
  if (offset > 0) {
    offset -= 10;
    setTimeout(() => {
      drawArrow();
    }, 50);
  }
  else {
      offset = length;
      setTimeout(() => {
      drawArrow();
    }, 50);
  }
};

drawArrow();
