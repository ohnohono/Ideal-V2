import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';



mapboxgl.accessToken = 'pk.eyJ1Ijoib2hub2hvbm8iLCJhIjoiY2s3dTdhZmNwMThjbzNkcDRzZGZ6cndrNCJ9.VTWeuBXcYsEaaJFXCSo7tA';

class MapMain extends Component {
  constructor(props){
    super(props);
    this.state={
      lng: -84,
      lat: 33,
      zoom: 16

    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  render(){
    return(
      <div className="map_wrap">
      map
      <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    )
  }

}

export default MapMain;
