import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'LaunchCode Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.launchcode.org/assets/LaunchCode-logo-e8cafd1600e69d46035ac2079a1367934739a97bec2048c771c7b869115a87be.jpg';
  image3 = 'https://www.launchcode.org/assets/press/Logo%20-%20LaunchCode-800pxW-32a364a7012c11780c7ce03c83a253bd119e08f482a87623f33c23cbdc1ebf4b.jpg';

  constructor() { }

  ngOnInit() {
  }

}