const container = document.getElementById("container");
const button = document.getElementById("sizebtn");

function createGrid(size) {
  container.replaceChildren();
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");

    let interactions = 0;

    cell.addEventListener("mouseenter", () => {
      interactions = Math.min(interactions + 1, 10);

      // Pick a new random RGB color, then darken it with each interaction.
      const darkening = 1 - interactions * 0.1;
      const red = Math.floor(Math.random() * 256 * darkening);
      const green = Math.floor(Math.random() * 256 * darkening);
      const blue = Math.floor(Math.random() * 256 * darkening);

      cell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });

    container.appendChild(cell);
  }
}

button.addEventListener("click", () => {
  const answer = prompt("Enter squares per side (1–100):");
  if (answer === null || answer.trim() === "") return;

  const size = Number(answer);

  if (!Number.isInteger(size) || size < 1 || size > 100) {
    alert("Please enter a whole number from 1 to 100.");
    return;
  }

  createGrid(size);
});

createGrid(16);
