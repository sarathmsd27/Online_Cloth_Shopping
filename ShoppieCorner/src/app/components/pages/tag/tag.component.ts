import { Component, OnInit } from '@angular/core';
import { FashionsService } from 'src/app/services/fashions.service';
import { Tag } from 'src/app/shared/model/Tag';
@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
  tags?:Tag[];
  constructor(api:FashionsService){
    api.getAllTags().subscribe(serverTag=>{
      this.tags=serverTag;
    });
  }
  ngOnInit(): void {
      
  }

}
