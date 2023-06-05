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
  click:boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        return result.matches
      }),
      shareReplay()
    );
  goToWorkExperience() {
    this.click = false;
    document.getElementById("work-experience")?.scrollIntoView({ behavior: "smooth" });
  }
  gotToAboutMe() {
    this.click = false;
    document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" });
  }

  goToMyProjects() {
    this.click = false;
    document.getElementById("my-projects")?.scrollIntoView({ behavior: "smooth" });
  }

  goToContacts() {
    this.click = false;
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }
}
