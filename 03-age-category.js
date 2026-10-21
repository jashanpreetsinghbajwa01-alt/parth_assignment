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
  const n = Number(data.get("age")); show(n < 13 ? "Child" : n <= 19 ? "Teenager" : "Adult");
});
