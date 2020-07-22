import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%',
    border: '1px solid white',
    borderRadius: '20px'
};

const containerStyle = {
    width: '70%',
    height: '35%',
    'margin-top': '20px',
    'margin-left': '225px'
 
}

class MapContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showingInfoWindow: false,  
            activeMarker: {},          
            selectedPlace: {}          
        };
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
  });

    onClose = props => {
            if (this.state.showingInfoWindow) {
                
                this.setState({
                    showingInfoWindow: false,
                    activeMarker: null
                });
            }
    }

    render() {
        return (
            <Map
            
                containerStyle = {containerStyle}
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{ lat: 42.299807, lng: 23.112225 }}
              
            >
              <Marker
                onClick={this.onMarkerClick}
                name={'You can find us here :)'}
              />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h4>{this.state.selectedPlace.name}</h4>
                </div>
              </InfoWindow>
            </Map>
        );
    };
};



export default GoogleApiWrapper({
    apiKey: 'AIzaSyDuXT8djfkXw56BlEXzWaSPo97F5B2uf_I'
})(MapContainer);