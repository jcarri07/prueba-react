import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import "./styles/estilos.css";
import UserFoto from "./components/UserFoto";
import NameLabel from "./components/NameLabel";
import ButtonMessage from "./components/ButtonMessage";
import ButtonOutline from "./components/ButtonOutline";
import ListData from "./components/ListData";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  const mapRef = useRef(null);
  const [userData, setUserData] = useState(null);
  const [center, setCenter] = useState({
    lat: -61.3317,
    lng: -98.8134,
  });

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        setUserData(data.results[0]);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      const userLat = parseFloat(userData.location.coordinates.latitude);
      const userLng = parseFloat(userData.location.coordinates.longitude);
      setCenter({
        lat: userLat,
        lng: userLng,
      });
    }
  }, [userData]);

  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4 card-custom">
              <UserFoto src={userData?.picture.large} />
              <div className="text-center mt-3">
                <NameLabel
                  name={
                    userData?.name.title +
                    " " +
                    userData?.name.first +
                    " " +
                    userData?.name.last
                  }
                />
                <ListData
                  genero={userData?.gender}
                  email={userData?.email}
                  tlf={userData?.phone}
                />
                <p>Location: {userData.location.street.number} {userData.location.street.name}, {userData.location.city}, {userData.location.state}, {userData.location.country}</p>
                <div className="buttons">
                  <ButtonMessage title="Mensaje" />
                  <ButtonOutline title="Contacto" />
                </div>
                <div style={{ height: "50vh", width: "100vh" }}>
                  <GoogleMapReact defaultCenter={center} defaultZoom={10}>
                    {userData && (
                      <AnyReactComponent
                        lat={center.lat}
                        lng={center.lng}
                        text="AQUhI"
                      />
                    )}
                  </GoogleMapReact>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App