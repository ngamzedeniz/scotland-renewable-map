const map = L.map('map').setView([56.4907, -4.2026], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(point => {
            L.circle([point.lat, point.lon], {
                color: 'blue',
                fillColor: '#30f',
                fillOpacity: 0.5,
                radius: point.capacity * 10
            })
            .bindPopup(`<b>${point.name}</b><br>Technology: ${point.technology}<br>Status: ${point.status}`)
            .addTo(map);
        });
    })
    .catch(error => console.error('Error loading data:', error));
