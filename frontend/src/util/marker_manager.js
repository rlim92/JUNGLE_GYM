
export default class MarkerManager {
    constructor(map, locations) {
        this.map = map;
        this.markers = {};
        Object.values(locations).map
        this.markers[location.name] = this.createMarker(location)
    }    
    
    updateMarkers(benches) {
        const fastBenches = {}
        Object.values(benches).forEach( bench => {
            fastBenches[bench.id] = bench
            if (!this.markers[bench.id]) {
                this.markers[bench.id] = this.createMarkerFromBench(bench)
            }
        })
        // benches.forEach((bench) => {
        //     if (!this.markers[bench.id]) {
        //         this.markers[bench.id] = this.createMarkerFromBench(bench)
        //     }
        // })        Object.keys(this.markers).forEach( id => {
            if (!fastBenches[id]) {
                this.markers[id].setMap(null);
                delete this.markers[id];
            }
        })        console.log(this.markers)
    }    
    
    createMarkerFromBench(bench) {
        return new google.maps.Marker({
            position: { lat: bench.lat, lng: bench.lng },
            map: this.map,
            title: bench.description
        })    }    // removeMarker()
}
