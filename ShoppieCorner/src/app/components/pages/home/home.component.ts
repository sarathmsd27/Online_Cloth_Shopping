import { Component,OnInit } from '@angular/core';
import { FashionsService } from 'src/app/services/fashions.service';
import { Fashion } from '../../../shared/model/Fashion';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   fashions:Fashion[]=[];

 constructor(private api:FashionsService, activateRoute:ActivatedRoute){
  let fashionObservable:Observable<Fashion[]>
  activateRoute.params.subscribe((params)=>{
    if(params.searchTerm)
   fashionObservable=this.api.getAllProductBySearchTerm(params.searchTerm)
    else if(params.tag){
      fashionObservable=this.api.getAllProductByTag(params.tag)
    } 
    else
    //get all data retrun form services
    fashionObservable = api.getAll()
    fashionObservable.subscribe((serverFashion)=>{
      this.fashions=serverFashion;
    })
    
   
  })
  
  }
   ngOnInit(){}
   
  }



 