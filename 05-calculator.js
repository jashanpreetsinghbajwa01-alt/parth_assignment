const form = document.querySelector("#answer-form");
const result = document.querySelector("#result");
function show(message) { result.textContent = message; }
function parseNumbers(text) {
  const parts = text.split(",").map(value => value.trim());
  if (!parts.length || parts.some(value => value === "")) return null;
  const numbers = parts.map(Number);
  return numbers.every(Number.isFinite) ? numbers : null;
}
form.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const a = Number(data.get("first")), b = Number(data.get("second")), op = data.get("operation"); if (op === "/" && b === 0) show("Cannot divide by zero."); else { const result = op === "+" ? a + b : op === "-" ? a - b : op === "*" ? a * b : a / b; show(`${a} ${op} ${b} = ${result}`); }
});
