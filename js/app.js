const url = 'https://randomuser.me/api/?results=12';

function createNode(element) {
      return document.createElement(element);
  }

function append(parent, el) {
    return parent.appendChild(el);
  }


function fetchData(url) {
  return fetch(url)
          .then(res => res.json());
}

fetchData(url)
  .then(function(data) {
    const employees = data.results;
    return employees.map(function(employee) {
      const gallery = document.getElementById('gallery');
      const cards = createNode('div');
      const cardImageContainer = createNode('div');
      const cardInfoContainer = createNode('div');
      const img = createNode('img');
      const name = createNode('h3');
      const email = createNode('p');
      const city = createNode('p');

      cards.className = "card";
      cardImageContainer.className = "card-img-container";
      cardInfoContainer.className = "card-info-container";
      img.className = "card-img";
      name.className = "card-name cap";
      email.className = "card-text";
      city.className = "card-text cap";

      img.src = employee.picture.large;
      name.innerHTML = employee.name.first + " " + employee.name.last;
      email.innerHTML = employee.email;
      city.innerHTML = employee.location.city;
      append(cardImageContainer, img);
      append(cards, cardImageContainer);

      append(cardInfoContainer, name);
      append(cardInfoContainer, email);
      append(cardInfoContainer, city);
      append(cards, cardInfoContainer);

      append(gallery, cards);

    });
  });

const cards = document.querySelectorAll('.card')
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function() {
    console.log("clicked");
  })
}
