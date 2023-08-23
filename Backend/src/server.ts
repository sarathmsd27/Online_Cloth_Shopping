import express from "express";
import cors from "cors";
import { sample_products, sample_tags, sample_users } from './data';
import jwt from "jsonwebtoken"

const app=express();
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

//promisses
app.get("/api/products",(req,res)=>{
   res.send(sample_products)
})

//get products via searchterm
app.get("/api/products/search/:searchTerm",(req,res)=>{
    const searchTerm=req.params.searchTerm;
    const products= sample_products.filter(product=>product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(products)
})
//get products by all tags
app.get("/api/products/tags",(req,res)=>{
    res.send(sample_tags)
})
//get product by specific tags
app.get("/api/products/tag/:tagName",(req,res)=>{
    const tagName=req.params.tagName;
    const products=sample_products.filter(product=>product.tag?.includes(tagName));
    res.send(products)
})

//get product by id
app.get("/api/products/:productId",(req,res)=>{
    const productId = req.params.productId;
    const products=sample_products.find(product=>product.id==productId);
    res.send(products)
})

//loginApi
app.post("/api/users/login",(req,res)=>{
    const {email,password}=req.body;
    const user = sample_users.find(user=>user.email === email && user.password===password);
    
    if(user){
       res.send(generateTokenResponse(user))
    }
    else{
        res.status(400).send("User name or Password is invalid!")
    }

})
 
const generateTokenResponse = (user:any)=>{
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    },"gmail",{
        expiresIn:"30d"
   });//shoppieCorner is the secret key.
   user.token=token;
   return user; 
}

const port = 5000;
app.listen(port,()=>{
    console.log("Website is running on http://localhost:"+port)
})