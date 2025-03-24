const destinations=(req,res)=>{
    console.log("Dashboard API Hit");
    const cards=
        [
            {
              "id": 1,
              "title": "Taj Mahal",
              "description": "One of the Seven Wonders of the World, a symbol of love.",
              "latitude": 27.1751,
              "longitude": 78.0421,
              "imageUrl": "/uploads/taj-mahal.jpg"
            },
            {
              "id": 2,
              "title": "Gateway of India",
              "description": "A historic arch-monument in Mumbai overlooking the Arabian Sea.",
              "latitude": 18.9220,
              "longitude": 72.8347,
              "imageUrl": "/uploads/gateway-of-india.jpg"
            },
            {
              "id": 3,
              "title": "Jaipur City Palace",
              "description": "A magnificent palace showcasing Rajput architecture.",
              "latitude": 26.9255,
              "longitude": 75.8237,
              "imageUrl": "/uploads/jaipur-city-palace.jpg"
            },
            {
              "id": 4,
              "title": "Mysore Palace",
              "description": "A stunning Indo-Saracenic palace with grand interiors.",
              "latitude": 12.3052,
              "longitude": 76.6552,
              "imageUrl": "/uploads/mysore-palace.jpg"
            },
            {
              "id": 5,
              "title": "Varanasi Ghats",
              "description": "Spiritual ghats on the banks of the Ganges, a sacred Hindu site.",
              "latitude": 25.3176,
              "longitude": 83.0100,
              "imageUrl": "/uploads/varanasi-ghat.jpg"
            },
            {
              "id": 6,
              "title": "Hampi",
              "description": "Ruins of the Vijayanagara Empire, a UNESCO World Heritage Site.",
              "latitude": 15.3350,
              "longitude": 76.4600,
              "imageUrl": "/uploads/hampi.jpg"
            },
            {
              "id": 7,
              "title": "India Gate",
              "description": "A war memorial dedicated to Indian soldiers in New Delhi.",
              "latitude": 28.6129,
              "longitude": 77.2295,
              "imageUrl": "/uploads/india-gate.jpg"
            },
            {
              "id": 8,
              "title": "Goa Beaches",
              "description": "Famous for its sandy beaches, nightlife, and water sports.",
              "latitude": 15.2993,
              "longitude": 74.1240,
              "imageUrl": "/uploads/goa-beach.jpg"
            },
            {
              "id": 9,
              "title": "Kashmir Valley",
              "description": "A paradise with snow-capped mountains and scenic beauty.",
              "latitude": 33.7782,
              "longitude": 76.5762,
              "imageUrl": "/uploads/kashmir-valley.jpg"
            },
            {
              "id": 10,
              "title": "Rann of Kutch",
              "description": "A vast white desert, famous for the Rann Utsav festival.",
              "latitude": 23.7333,
              "longitude": 70.1333,
              "imageUrl": "/uploads/rann-of-kuch.jpg"
            }
          ];
    res.json(cards);
};

const mapView=(req,res)=>{
    const { id } = req.params;
  const destination = destinations.find(dest => dest.id === parseInt(id));
  
  if (!destination) {
    return res.status(404).json({ error: "Destination not found" });
  }
  
  res.json(destination);
};

module.exports = {destinations,mapView}