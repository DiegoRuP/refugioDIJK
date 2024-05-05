import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoAdoptarPipe } from './video-adoptar.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, VideoAdoptarPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  video:string="Jv1iolzbvZg";
}
