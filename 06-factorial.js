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
  const n = Number(data.get("number")); if (!Number.isInteger(n) || n < 0 || n > 170) { show("Enter a whole number from 0 to 170."); return; } let result = 1; for (let i = 1; i <= n; i++) result *= i; show(`${n}! = ${result}`);
});
