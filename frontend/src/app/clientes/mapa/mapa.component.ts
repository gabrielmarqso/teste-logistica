import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { Control } from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  @ViewChild('addressInput') addressInput: ElementRef;

  map: google.maps.Map;
  autocomplete: google.maps.places.Autocomplete;


  street: string;
  number: string;
  neighborhood: string;
  city: string;
  address: string;

  ngOnInit() {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    };
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );


    this.autocomplete = new google.maps.places.Autocomplete(this.addressInput.nativeElement);
    this.autocomplete.addListener('place_changed', () => {
      this.onPlaceChanged();
    });
  }
  onPlaceChanged() {
    const place = this.autocomplete.getPlace();
    if (place.geometry) {
      // center map and create marker as before
    } else {
      console.log('Place not found');
    }
  }
  updateAutocomplete() {
    this.autocomplete.setBounds(this.map.getBounds());
  }

  onSearch() {
    const fullAddress = `${this.street}, ${this.number} - ${this.neighborhood}, ${this.city}`;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: fullAddress }, (results, status) => {
      if (status === 'OK') {
        const result = results[0];
        const location = result.geometry.location;
        const marker = new google.maps.Marker({
          position: location,
          map: this.map,
          title: result.formatted_address
        });
        this.map.setCenter(location);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });


  }


}

