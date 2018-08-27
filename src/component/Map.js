import React, {
    Component
} from 'react';
import './Map.css';
import {
    style
} from './Styles.js';

const initLocation = {
    lat: 44.426763,
    lng: 26.102507
};

class Map extends Component {
    componentDidMount() {
        // Failure function to the window context so that it can be called automatically.
        window.gm_authFailure = this.gm_authFailure;
        // Connect the initMap() function within this class to the global window context,
        // so Google Maps can invoke it
        window.initMap = this.initMap;
        // Asynchronously load the Google Maps script, passing in the callback reference
        loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDQKfmhJN7QXpLJzaaqn6f9JRtyJIyPIEk&callback=initMap')
    }

    // implement the functionality to show error message in it and this function will be called automatically in case of authentication error.
    gm_authFailure() {
        window.alert("Google Maps error! Cheack the maps API Key")
    }
    initMap = () => {
        let mapDiv = document.getElementById("map");
        const map = new window.google.maps.Map(mapDiv, {
            center: initLocation,
            zoom: 15,
            styles: style
        });

        const infoWindow = new window.google.maps.InfoWindow();
        this.props.initMap(map, infoWindow);
    }

    render() {
        return ( <
            div className = "map"
            id = "map" > < /div>
        )
    }
}

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    script.onerror = () => {
        alert('can not load map, refresh it!')
    }
    ref.parentNode.insertBefore(script, ref);
}



export default Map;