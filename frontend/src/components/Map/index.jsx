import { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import Header from "../Header";
import Footer from "../Footer";
import Cookies from "js-cookie";
import { API_BASE_URL, IMG_BASE_URL } from "../../config";
import "leaflet/dist/leaflet.css";
import "./index.css";


class MapView extends Component {
  state = {
    destinations: [],
    selectedLocation: null,
    isLoading: true,
    error: null,
  };
  fetchDestinations = async () => {
    const jwtToken = Cookies.get("jwt_token"); 
    if (!jwtToken) {
      return this.setState({ error: "Unauthorized: Please login again." });
    }

    try {
      const response = await fetch(`${API_BASE_URL}/destinations`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch destinations.");
      }

      const data = await response.json();
      this.setState({ destinations: data, isLoading: false, selectedLocation: data[0] || null });
    } catch (error) {
      console.error("Fetch error:", error);
      this.setState({ error: error.message, isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchDestinations();
  }

  handleShowOnMap = (destination) => {
    this.setState({ selectedLocation: destination });
  };

  render() {
    const { destinations, selectedLocation, isLoading, error } = this.state;

    return (
      <>
        <Header />

        <div className="map-container">
          <div className="destination-list">
            <h2>Available Destinations</h2>

            {isLoading ? (
              <p>Loading destinations...</p>
            ) : error ? (
              <p className="error">{error}</p>
            ) : (
              destinations.map((destination) => (
                <div key={destination.id} className="destination-card">
                  
                  <img src={`${IMG_BASE_URL+destination.imageUrl}`} className="card-image" alt={`${destination.title}`}/>
                  <h3>{destination.title}</h3>
                  <p>{destination.description}</p>
                  <button onClick={() => this.handleShowOnMap(destination)}>
                    Show on Map
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="map-section">
            {selectedLocation && (
              <MapContainer
                center={[selectedLocation.latitude, selectedLocation.longitude]}
                zoom={6}
                style={{ height: "500px", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {destinations.map((dest) => (
                  <Marker key={dest.id} position={[dest.latitude, dest.longitude]}>
                    <Popup>{dest.title}</Popup>
                  </Marker>
                ))}
                <MapUpdater location={selectedLocation} />
              </MapContainer>
            )}
          </div>
        </div>

        <Footer />
      </>
    );
  }
}


const MapUpdater = ({ location }) => {
  const map = useMap();
  map.setView([location.latitude, location.longitude], 10);
  return null;
};

export default MapView;
