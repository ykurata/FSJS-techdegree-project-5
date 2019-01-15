$(document).ready(function() {
  const userAPI = 'https://randomuser.me/api/?results=12';

  const modalContainer = $('<div class="modal-container"></div>');


  function displayPhotos(data) {

    $.each(data.results, function(index, user) {
      const picture = user.picture.large;
      const name = user.name.first + ' ' + user.name.last;
      const email = user.email;
      const city = user.location.city;
      const phone = user.phone;
      const address = user.location.street + ', ' + user.location.state + ' ' + user.location.postcode;
      const date = new Date(user.dob.date);
      const birthday = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getYear();

      const cardHTML = $('<div class="card"></div>');

      // Create and append employee's photo
      var cardImageContainer = '<div class="card-img-container">';
      cardImageContainer += '<img class="card-img" src="' + picture + '" alt="profile picture">'
      cardImageContainer += '</div>'
      cardHTML.append(cardImageContainer);

      // Create and append employee's info
      var cardInfoContainer = '<div class="card-info-container">';
      cardInfoContainer += '<h3 id="name" class="card-name cap">' + name +'</h3>';
      cardInfoContainer += '<p class="card-text">' + email + '</p>';
      cardInfoContainer += '<p class="card-text cap">' + city + '</p>';
      cardInfoContainer += '</div>'
      cardHTML.append(cardInfoContainer);

      // Append cardHTML to gallery div
      $('#gallery').append(cardHTML);

      // create and append info to modal cotainer

      var modal = '<div class="modal">';
      modal += '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>';
      modal += '<img class="modal-img" src="' + picture + '" alt="profile picture">';
      modal += '<h3 id="name" class="modal-name cap">' + name + '</h3>';
      modal += '<p class="modal-text">' + email + '</p>';
      modal += '<p class="modal-text cap">' + address + '</p>';
      modal += '<hr>';
      modal += '<p class="modal-text">Birthday: ' + birthday + '</p>'
      modalContainer.append(modal);
      $('#gallery').append(modalContainer);
      $('.modal-container').hide();
    }); // end each

    // append modalContainer class to gallery
    $('#gallery').append(modalContainer);

    // display modal div which index is matched with card div
    $('.card').click(function() {
      const index = $(this).index();
      $('.modal-container').show();
      $('.modal').hide();
      $('.modal')[index].style.display = "block";
    });

    // hide modal container
    $('button').click(function() {
      $('.modal-container').hide();
      $('.modal').hide();
    });



  }// end function displayPhotos

  $.getJSON(userAPI, displayPhotos);

}); // end ready
