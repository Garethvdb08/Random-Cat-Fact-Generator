const factContainer = document.getElementById("fact-container");
const generateBtn = document.getElementById("generate-btn");

async function generateFact() {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    const fact = data.fact;

    factContainer.textContent = fact;
    console.log(fact);
  } catch (error) {
    factContainer.textContent =
      "Could not fetch a fact. Please try again later.";
    console.error("Error fetching fact:", error);
  }
}

generateBtn.addEventListener("click", generateFact);

// Generate a fact on initial page load
generateFact();
