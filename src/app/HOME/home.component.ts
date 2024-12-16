import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 
import { filter } from 'rxjs/operators'; 
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HOMEComponent {
  showButtons: boolean = true; 

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showButtons = event.url === '/HOME';
      });
  }
}
