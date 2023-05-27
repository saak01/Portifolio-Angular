import { Component, OnInit } from '@angular/core';
import { GetRepoService } from '../../services/get-repo/get-repo.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit{
  constructor(private getRepositores: GetRepoService,
    private router: Router){}
  error:boolean = false;
  repos:any[] = [];

  ngOnInit(): void {

    firstValueFrom(this.getRepositores.getRepositories())
    .then((res) => {
      let arr:[] = res
      this.repos = arr.filter((el:any) => el.name != 'saak01')
    })
    .catch((err)=> {
      console.log(err);
      this.error = true;
    })
  }
  
  navigateToProject(url:string){
    window.open(url,'_blank');
  }
}
