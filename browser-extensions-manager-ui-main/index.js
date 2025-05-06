// import data from data.json
import data from './data.json' with { type: 'json' };
console.log(data);

// create function to create a card for each extension in data.json
function createCard(extension) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${extension.logo}" alt="${extension.name} logo" class="card-image">
    <h3 class="card-name">${extension.name}</h3>
    <p class="card-description">${extension.description}</p>
    <button class="remove-btn">Remove</button>
    <label class="switch">
      <input type="checkbox">
      <span class="slider round"></span>
    </label>

  `;
  return card;
}

// create function to display all cards in the extensionCardContainer in index.html
function displayCards() {
  const extensionCardContainer = document.getElementById('extensionCardContainer');
  data.forEach(extension => {
    const card = createCard(extension);
    extensionCardContainer.appendChild(card);
  });
}

// run displayCards function to display all cards on page load
export default displayCards()