import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const mapsKey = require("../../mapkey").mapsKey;
// const mapsKey = require("../../../config/keys").mapsKey;
// import Marker from './marker';


class Map extends Component {
    constructor(props) {
        super(props);
        this.loadMarkers = this.loadMarkers.bind(this);
        this.bindMaps = this.bindMaps.bind(this);
        this.state={
            count: 0,
            userPos: {
                lat: 40.73636473997069,
                lng: -73.99395929250146
            },
            gotMaps: false
        }
        this.createRoute = this.createRoute.bind(this);
        this.currentUserMark = null;
    }
    static defaultProps = {
        center: {
            lat: 40.73636473997069,
            lng: -73.99395929250146
        },
        zoom: 14
    };



    componentDidMount() {
        this.props.fetchLocations();
    }

    bindMaps(map, maps) {
        this.map = map;
        this.maps = maps;
        this.currentUserMark = new this.maps.Marker({
            position: this.state.userPos,
            map: this.map,
            title: "Origin",
            icon: {
                path: this.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                scale: 6
            }
        });
        this.setState({gotMaps: true});
    }

    createRoute(e){
        if(this.directionsDisplay != null) {
            this.directionsDisplay.setMap(null);
            this.directionsDisplay = null;
        }

        this.directionsDisplay = new this.maps.DirectionsRenderer({
            preserveViewport: true,
            suppressMarkers: true
        });
        this.directionsService = new this.maps.DirectionsService();
        const directionsParam = {
            //TODO: origin should be where the user is
            origin: { lat: this.state.userPos.lat, lng: this.state.userPos.lng },
            destination: { lat: e.latLng.lat(), lng: e.latLng.lng() },
            travelMode: "WALKING",
            unitSystem: this.maps.UnitSystem.IMPERIAL
        };
        this.directionsDisplay.setMap(this.map);
        this.directionsService.route(directionsParam, (result, status) => {
            this.directionsDisplay.setDirections(result);
            // console.log(result);
            // console.log(status);
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
            }); // how to remove my team lead by force?
            map.addListener("click", e => {
                console.log(`Lat: ${e.latLng.lat()}`)
                console.log(`Lng: ${e.latLng.lng()}`)
            });
        }
    }

// if(directionsDisplay != null) {
//     directionsDisplay.setMap(null);
//     directionsDisplay = null;
// }


    render() {

        if (this.state.gotMaps) {
            navigator.geolocation.getCurrentPosition(position => {
                const userPos = { lat: position.coords.latitude, lng: position.coords.longitude };
                this.map.panTo(userPos)
                this.map.setZoom(14);
                this.setState({ userPos })
                window.state = this.state;
                debugger
                if(this.currentUserMark){
                    this.currentUserMark.setMap(null);
                }
                this.currentUserMark = new this.maps.Marker({
                    position: userPos,
                    map: this.map,
                    title: "Origin",
                    // label: "You"
                    icon: {
                        path: this.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                        scale: 6
                    }
                })
            }, err => console.log(err), { timeout: 10000 })
        }
        return (
            // Important! Always set the container height explicitly
            <div className="map-div">
                <GoogleMapReact
                bootstrapURLKeys={{
                    key: mapsKey
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