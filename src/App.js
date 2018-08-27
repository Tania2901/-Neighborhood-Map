import React, { Component } from 'react';
import './App.css';
import Map from './component/Map.js'
import MapDrawer from './component/Drawer.js'
import Head from './component/Head.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {placesData} from './Data.js';
import {Place} from './component/Place.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpen: false,
      map: null,
      infoWindow: null,
      places: [],
      query: '',
    }
  }

  initMap = (map, infoWindow) => {

    let places = [];

    placesData.map((data) => {
        const place = new Place(window, data, map, infoWindow, '');        
        place.setMarker(); 
        places.push(place);
    });

    this.setState({
      map, 
      infoWindow, 
      places,
    });
  }

  filterMarker = (query) => {
    this.state.places.map((place) => {
      place.filterText = query;
      place.setMarker();
    })

    this.setState({query});
  }

  toggleDrawer = () => {
    this.setState((prevState) => {
      return {drawerIsOpen: !prevState.drawerIsOpen}
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Head toggleDrawer={this.toggleDrawer}/>
          <MapDrawer query={this.state.query}
              drawerIsOpen={this.state.drawerIsOpen} toggleDrawer={this.toggleDrawer}
              filterMarker={this.filterMarker}
              places={this.state.places}
          />
          <Map initMap={this.initMap}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
