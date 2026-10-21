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
  const items = data.get("items").split(",").map(x => x.trim()).filter(Boolean); const target = data.get("search").trim(); const found = items.some(item => item.toLowerCase() === target.toLowerCase()); show(found ? `${target} was found in the array.` : `${target} was not found in the array.`);
});
