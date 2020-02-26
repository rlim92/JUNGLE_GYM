
export default class MarkerManager {
    constructor(map, locations) {
        this.map = map;
        this.markers = {};
        // Object.values(locations).map
        // this.markers[location.name] = this.createMarker(location)
    }    
    
    // createMarkerFromBench(bench) {
    //     return new google.maps.Marker({
    //         position: { lat: bench.lat, lng: bench.lng },
    //         map: this.map,
    //         title: bench.description
    //     })    
    // }    // removeMarker()
}
