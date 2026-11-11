
const button = document.querySelector("#generate");
const result = document.querySelector("#result");
const name = document.querySelector("#cat-name");
const description = document.querySelector("#cat-description");
const error = document.querySelector("#error");

button.addEventListener("click", async () => {
  button.disabled = true;
  error.hidden = true;

  try {
    const response = await fetch("/api/cat");

    if (!response.ok) {
      throw new Error("Could not load a cat");
    }

    const data = await response.json();

    name.textContent = data.name;
    description.textContent = data.description;
    result.hidden = false;
  } catch {
    result.hidden = true;
    error.textContent = "Could not load a cat. Try again.";
    error.hidden = false;
  } finally {
    button.disabled = false;
  }
});

