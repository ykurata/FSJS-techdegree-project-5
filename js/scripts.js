$(document).ready(function() {
  var userAPI = 'https://randomuser.me/api/?results=12';
  $gallery = $('#gallery');

  function displayPhotos(data) {

    $.each(data.results, function(index, user) {
      var cardHTML = $('<div class="card"></div>');

      // Create and append employee's photo
      var cardImageContainer = $('<div class="card-img-container"></div>');
      var image = $('<img class="card-img" src="' + user.picture.large + '" alt="profile picture">');
      cardImageContainer.append(image);
      cardHTML.append(cardImageContainer);

      // Create and append employee's info
      var cardInfoContainer = $('<div class="card-info-container"></div>');
      var name = $('<h3 id="name" class="card-name cap"></h3>').html(user.name.first);
      var email = $('<p class="card-text"></p>').html(user.email);
      var city = $('<p class="card-text cap"></p>').html(user.location.city);
      cardInfoContainer.append(name);
      cardInfoContainer.append(email);
      cardInfoContainer.append(city);
      cardHTML.append(cardInfoContainer);

      // Append cardHTML to gallery div
      $gallery.append(cardHTML);
    }); // end each
  }

  $.getJSON(userAPI, displayPhotos);
}); // end ready
