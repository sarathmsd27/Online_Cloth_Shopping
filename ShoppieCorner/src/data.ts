import { Fashion } from "./app/shared/model/Fashion"; 
import { Tag } from "./app/shared/model/Tag";
export const sample_products:Fashion[]=[
    {
     id:'1',
    name:"Peter England",
    price:350,
    tag:['SemiFormal','Casuals','Printed'],
    favorite:true,
    stars:4.5,
    imageUrl:"./assets/Hero/f1.jpg",
    Made_in:["London"]
    },
    
    {
     id:'2',
    name:"OTTO",
    price:300,
    tag:['Partywear','Printed'],
    favorite:true,
    stars:4.0,
    imageUrl:"./assets/Hero/f2.jpg",
    Made_in:["India"]
    },

    {
     id:'3',
    name:"Snitch",
    price:150,
    tag:['Funky Shirts','SemiFormal','Casuals'],
    favorite:false,
    stars:3.0,
    imageUrl:"./assets/Hero/f3.jpg",
    Made_in:["India"]
    },

    {
     id:'4',
    name:"Allen Solly",
    price:450,
    tag:['OutFit','Slim Fit','Casuals'],
    favorite:false,
    stars:4.0,
    imageUrl:"./assets/Hero/f4.jpg",
    Made_in:["Uk",'PARIS']
    },

    {
     id:'5',
    name:"Luois Vitton",
    price:1500,
    tag:['FreekyStyled','OutFit'],
    favorite:false,
    stars:4.0,
    imageUrl:"./assets/Hero/f5.jpg",
    Made_in:["United Kingdom"]
    },

    {
     id:'6',
    name:"Adiddas",
    price:850,
    tag:['HoodieShirt','Casuals'],
    favorite:true,
    stars:4.0,
    imageUrl:"./assets/Hero/f6.jpg",
    Made_in:["India"]
    },

    {
     id:'7',
    name:"Luios Vitton",
    price:555,
    tag:['Freestyle','Pant'],
    favorite:true,
    stars:3.8,
    imageUrl:"./assets/Hero/f7.jpg",
    Made_in:["United Kingdom"]
    },

    {
     id:'8',
    name:"Snitch",
    price:350,
    tag:['T-Shirt','FreeStyled','SemiFormal'],
    favorite:false,
    stars:4.0,
    imageUrl:"./assets/Hero/f8.jpg", 
    Made_in:["India"]
    },
 ]
 export const sample_tags:Tag[]=[
    {name:'All',count:8},
    {name:'Casuals',count:4},
    {name:'SemiFormal',count:3},
    {name:'Printed',count:2},
    {name:'Outfit',count:2},
    {name:'HoodieShirt',count:1},
    {name:'Pant',count:1},
    {name:'T-Shirt',count:1},

 ]