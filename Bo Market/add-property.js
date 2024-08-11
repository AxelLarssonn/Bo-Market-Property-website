// add-property.js

const addPropertyForm = document.getElementById('add-property-form');

addPropertyForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Hämta värden från formuläret
  const titleInput = document.getElementById('title').value;
  const priceInput = document.getElementById('price').value;
  const addressInput = document.getElementById('address').value;
  const areaInput = document.getElementById('area').value;
  const roomsInput = document.getElementById('rooms').value;
  const descriptionInput = document.getElementById('description').value;

  // Skapa en ny bostad
  const newProperty = {
    title: titleInput,
    price: priceInput,
    address: addressInput,
    area: areaInput,
    rooms: roomsInput,
    description: descriptionInput
  };

  // Här kan du lägga till koden för att spara den nya bostaden, till exempel till en databas

  // Visa ett meddelande för bekräftelse
  alert('Bostaden har lagts till!');
});
