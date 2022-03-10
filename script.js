//stores all properties of rectangles
const rectangles = [
  { id: "A", color: "#D7695E" },
  { id: "B", color: "#F3AF6F" },
  { id: "C", color: "#F9D56B" },
  { id: "D", color: "#99C675" },
  { id: "E", color: "#799BD7" },
  { id: "F", color: "#A26C90" },
];

//access the container where rectangles will be placed
const rectangleWrapper = document.querySelector(".rectangleWrapper");

//creates rectangles and apply unique properties
rectangles.map((e) => {
  const newRectangle = document.createElement("div");
  newRectangle.innerHTML = `<div class='content'><p>DIV</p><p>${e.id}</p></div>`;

  newRectangle.style.background = `${e.color}`;
  newRectangle.classList.add("rectangle");

  rectangleWrapper.appendChild(newRectangle);
});
