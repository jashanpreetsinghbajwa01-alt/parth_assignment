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
  const values = parseNumbers(data.get("values")); if (!values) { show("Enter a comma-separated list of valid numbers."); return; } let max = values[0]; for (const n of values) if (n > max) max = n; show(`Maximum: ${max}`);
});
