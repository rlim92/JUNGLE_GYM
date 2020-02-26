import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// const mapsKey = require("../../../../config/keys").mapsKey;
// import Marker from './marker';

const Mark = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '500px', width: '500px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:""}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Mark
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;