import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-card',
  standalone: true,
  imports: [],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.scss'
})
export class MyCardComponent {
  @Input() imageurl:string=''
  @Input() title:string=''
  @Input() description:string=''
  @Input() buttonname:string=''
  
}
