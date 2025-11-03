const colors = ["red", "green", "blue", "orange", "cyan", "pink", "black"];

const main = document.getElementById("main");

colors.forEach((color, index) => {
  const colorElement = document.createElement("p");
  colorElement.innerText = `${index + 1}. ${color}`;
  colorElement.style.color = color;
  colorElement.classList.add("Color");
  main.appendChild(colorElement);
});

 