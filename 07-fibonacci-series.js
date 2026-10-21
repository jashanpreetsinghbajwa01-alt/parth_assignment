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
  const sequence = []; let a = 0, b = 1; for (let i = 0; i < 8; i++) { sequence.push(a); [a, b] = [b, a + b]; } show(sequence.join("  "));
});
