// script.js

// Bostäder tillgängliga för sökning (ersätt med dina egna bostäder)
const properties = [
  { title: "Vacker villa vid sjön", price: "500000", location: "Stockholm", rooms: 4 },
  { title: "Lägenhet med panoramautsikt", price: "300000", location: "Göteborg", rooms: 2 },
  // Lägg till fler bostäder här...
];

// Funktion för att visa bostäder baserat på sökkriterier
function displayProperties(propertiesArray) {
  const propertyList = document.querySelector('.property-list');
  propertyList.innerHTML = '';

  propertiesArray.forEach(property => {
    const propertyCard = document.createElement('div');
    propertyCard.classList.add('property-card');

    const propertyImage = document.createElement('img');
    // Lägg till väg för bilderna om tillgängligt
    propertyImage.src = ''; 
    propertyImage.alt = property.title;

    const propertyTitle = document.createElement('h3');
    propertyTitle.textContent = property.title;

    const propertyLocation = document.createElement('p');
    propertyLocation.textContent = `Plats: ${property.location}`;

    const propertyPrice = document.createElement('p');
    propertyPrice.textContent = `Pris: ${property.price} kr`;

    propertyCard.appendChild(propertyImage);
    propertyCard.appendChild(propertyTitle);
    propertyCard.appendChild(propertyLocation);
    propertyCard.appendChild(propertyPrice);

    propertyList.appendChild(propertyCard);
  });
}

// Funktion för att filtrera bostäder baserat på användarens sökkriterier
function filterProperties(location, maxPrice, minRooms) {
  return properties.filter(property => {
    const locationMatch = property.location.toLowerCase().includes(location.toLowerCase());
    const priceMatch = parseInt(property.price) <= maxPrice || !maxPrice;
    const roomsMatch = property.rooms >= minRooms || !minRooms;

    return locationMatch && priceMatch && roomsMatch;
  });
}

// Lyssna på inlämningshändelse för sökformuläret
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const locationInput = document.getElementById('location').value.trim();
  const maxPriceInput = parseInt(document.getElementById('max-price').value) || Infinity;
  const minRoomsInput = parseInt(document.getElementById('min-rooms').value) || 0;

  const filteredProperties = filterProperties(locationInput, maxPriceInput, minRoomsInput);
  displayProperties(filteredProperties);
});

// Visa alla bostäder vid första laddningen av sidan
displayProperties(properties);

// Skapa en karta och ange latitud och longitud för dess centrum
var map = L.map('mapid').setView([59.3293, 18.0686], 13);

// Lägg till en basplatta från OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([59.3293, 18.0686]).addTo(map)
.bindPopup('Här är du!')
.openPopup();

