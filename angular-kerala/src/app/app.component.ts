import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCarousalComponent } from "./ui/my-carousal/my-carousal.component";
import { MyDescriptionComponent } from "./ui/my-description/my-description.component";
import { MyCardComponent } from "./ui/my-card/my-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyCarousalComponent, MyDescriptionComponent, MyCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
