// Function to fetch cat facts and update the DOM
async function fetchCatFacts() {
  try {
      // Fetch data from the API
      const response = await fetch('https://brianobruno.github.io/cats.json');
      const data = await response.json();

      // Sort the facts array by factId
      const sortedFacts = data.facts.sort((a, b) => a.factId - b.factId);

      // Update the page with sorted facts
      const factsContainer = document.getElementById('catFacts');
      factsContainer.innerHTML = ''; // Clear previous content
      sortedFacts.forEach(fact => {
          const factElement = document.createElement('p');
          factElement.textContent = `Fact ${fact.factId}: ${fact.text}`;
          factsContainer.appendChild(factElement);
      });

      // Update the image with the picture link returned by the API
      const catImage = document.getElementById('catImage');
      catImage.src = data.picture;
  } catch (error) {
      console.error('Error fetching the cat facts:', error);
  }
}

// Add an event listener to the button to trigger the API call
document.getElementById('getCatFactsButton').addEventListener('click', fetchCatFacts);
