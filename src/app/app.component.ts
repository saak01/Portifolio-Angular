import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portifolio';
  button: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        this.button = result.matches
        return result.matches
      }),
      shareReplay()
    );
  goToWorkExperience() {
    document.getElementById("work-experience")?.scrollIntoView({ behavior: "smooth" });
  }
  gotToAboutMe() {
    document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" });
  }

  goToMyProjects() {
    document.getElementById("my-projects")?.scrollIntoView({ behavior: "smooth" });
  }

  goToContacts() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

}
