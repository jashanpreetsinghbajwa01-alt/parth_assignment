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
  const chars = data.get("values").split(",").map(x => x.trim()); if (chars.some(x => [...x].length !== 1)) { show("Enter exactly one character for each comma-separated item."); return; } const vowels = []; for (const ch of chars) if ("aeiou".includes(ch.toLowerCase())) vowels.push(ch); show(vowels.length ? `Vowels: ${vowels.join(", ")}` : "There are no vowels in this array.");
});
