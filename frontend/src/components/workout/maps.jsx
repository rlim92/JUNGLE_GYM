import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerManager from "../../util/marker_manager";
// const mapsKey = require("../../../config/keys").mapsKey;
// import Marker from './marker';

const Mark = ({ text }) => <div>{text}</div>;

class Map extends Component {
    constructor(props) {
        super(props);
        this.loadMarkers = this.loadMarkers.bind(this);
        this.bindMaps = this.bindMaps.bind(this);
        this.state={
            count: 0
        }
        this.createRoute = this.createRoute.bind(this);
    }
    static defaultProps = {
        center: {
            lat: 40.752067,
            lng: -73.981637
        },
        zoom: 11
    };

    componentDidMount() {
        this.props.fetchLocations();
    }

    bindMaps(map, maps) {
        this.map = map;
        this.maps = maps;
    }

    createRoute(e){
        if(this.directionsDisplay != null) {
            this.directionsDisplay.setMap(null);
            this.directionsDisplay = null;
        }

        this.directionsDisplay = new this.maps.DirectionsRenderer({
            preserveViewport: true
        });
        this.directionsService = new this.maps.DirectionsService();
        const directionsParam = {
            //TODO: origin should be where the user is
            origin: { lat: 40.752067, lng: -73.981637 },
            destination: { lat: e.latLng.lat(), lng: e.latLng.lng() },
            travelMode: "WALKING",
            unitSystem: this.maps.UnitSystem.IMPERIAL
        };
        this.directionsDisplay.setMap(this.map);
        this.directionsService.route(directionsParam, (result, status) => {
            this.directionsDisplay.setDirections(result);
            console.log(result);
            console.log(status);
        });
    }

    loadMarkers(map, maps) {
        if (this.props.locations.length) {
            this.props.locations.map(loc => {
                new maps.Marker({
                    position: {
                        lat: parseFloat(loc.lat),
                        lng: parseFloat(loc.lng)
                    },
                    map,
                    title: loc.name
                    }).addListener("click", this.createRoute);
                    map.addListener("click", e=>{
                        console.log(`Lat: ${e.latLng.lat()}`)
                        console.log(`Lng: ${e.latLng.lng()}`)
                        // debugger
                });
            }); // how to remove my team lead by force?
        }
    }

// if(directionsDisplay != null) {
//     directionsDisplay.setMap(null);
//     directionsDisplay = null;
// }


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
                onGoogleApiLoaded={({ map, maps }) => {
                    this.bindMaps(map, maps);
                    if (this.props.locations.length > 0) {
                        this.loadMarkers(map, maps);
                    }
                }}/>
            </div>
        );
    }f
}

export default Map;