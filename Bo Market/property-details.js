document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');
  
    const properties = [
      { id: 1, title: "Vacker villa vid sjön", price: "500 000 kr", address: "Stockholm", area: "200 m²", rooms: 5, description: "En underbar villa med fantastisk utsikt över sjön.", size: "200 m²", roomCount: 5, extraDescription: "Fantastisk trädgård med pool." , image: "Sthlm.jpg.jpg" },
      { id: 2, title: "Lägenhet med panoramautsikt", price: "300 000 kr", address: "Göteborg", area: "100 m²", rooms: 3, description: "En ljus och rymlig lägenhet med panoramautsikt över staden.", size: "100 m²", roomCount: 3, extraDescription: "Nära till kollektivtrafik och affärer.", image: "Göteborg.jpg.jpg" }
      // Lägg till fler bostäder här vid behov
    ];
  
    const selectedProperty = properties.find(property => property.id === parseInt(propertyId));
  
    if (selectedProperty) {
      document.getElementById('property-title').textContent = selectedProperty.title;
      document.getElementById('property-price').textContent = selectedProperty.price;
      document.getElementById('property-address').textContent = `Adress: ${selectedProperty.address}`;
      document.getElementById('property-area').textContent = `Storlek: ${selectedProperty.area}`;
      document.getElementById('property-rooms').textContent = `Antal rum: ${selectedProperty.rooms}`;
      document.getElementById('property-description').textContent = selectedProperty.description;
      // Uppdaterade detaljer
      document.getElementById('property-size').textContent = `Yta: ${selectedProperty.size}`;
      document.getElementById('property-room-count').textContent = `Antal rum: ${selectedProperty.roomCount}`;
      document.getElementById('property-extra-description').textContent = `Extra beskrivning: ${selectedProperty.extraDescription}`;
  
      const propertyImage = document.createElement('img');
      propertyImage.src = selectedProperty.image;
      propertyImage.alt = selectedProperty.title;
      document.getElementById('property-image').appendChild(propertyImage);
    } else {
      document.getElementById('property-title').textContent = "Bostad ej hittad";
    }
  });
  