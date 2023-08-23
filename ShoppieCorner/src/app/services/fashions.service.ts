import { Injectable } from '@angular/core';
import { Fashion } from '../shared/model/Fashion';
import { Tag } from '../shared/model/Tag';
import { HttpClient } from '@angular/common/http';
import { PRODUCTS_BY_ID_URL, PRODUCTS_BY_SEARCH_URL, PRODUCTS_BY_TAG_URL, PRODUCTS_TAGS_URL, PRODUCTS_URL } from '../shared/constants/url';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FashionsService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<Fashion[]>{
    // return sample_products
    return this.httpClient.get<Fashion[]>(PRODUCTS_URL)
  }
 // search product
getAllProductBySearchTerm(searchTerm:string){
//instead of below line we use
// return this.getAll().filter(product=>product.name.toLowerCase().includes(searchTerm.toLowerCase()))
return this.httpClient.get<Fashion[]>(PRODUCTS_BY_SEARCH_URL +searchTerm)
}
//Get all Tag
 getAllTags():Observable<Tag[]>{
//instead of below line we use
// return sample_tags
return this.httpClient.get<Tag[]>(PRODUCTS_TAGS_URL);
 }
//Get Product by Tags
getAllProductByTag(tag:string):Observable<Fashion[]>{
//instead of below line we use
// return tag === "All"? this.getAll():this.getAll().filter(product=>product.tag?.includes(tag))
return tag === "All"? this.getAll():this.httpClient.get<Fashion[]>(PRODUCTS_BY_TAG_URL +tag)
}
//get prodcut by id
getProductById(fashionId:string):Observable<Fashion>{
//  return this.getAll().find(product=>product.id===fashionId)?? new Fashion()
return this.httpClient.get<Fashion>(PRODUCTS_BY_ID_URL +fashionId)
}  
}
