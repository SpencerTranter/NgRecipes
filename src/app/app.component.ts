import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  features: string[] = ['recipies', 'shopping']
  currentFeature: string = this.features[0];

  onNavigate(feature: string) {
    if (this.features.includes(feature)) {
      this.currentFeature = feature;
    }
  }
  
}
