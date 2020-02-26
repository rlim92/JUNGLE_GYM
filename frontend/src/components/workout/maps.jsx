import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerManager from "../../util/marker_manager";
// const mapsKey = require("../../../config/keys").mapsKey;
// import Marker from './marker';

const Mark = ({ text }) => <div>{text}</div>;

class Map extends Component {
    constructor(props){
        super(props);
        this.loadMarkers = this.loadMarkers.bind(this);
    }
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    loadMarkers(map, maps){
        new maps.Marker({
            position: {
                lat: 0,
                lng: 0,
            }, // location.lng, location.lat
            map,
            title: "location.name"
        })
    }

    render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: "500px", width: "500px" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: ""
              }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({map, maps}) => this.loadMarkers(map, maps)}
            />
          </div>
        );
    }
}

export default Map;