using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using dotnetapp.Models;
using Microsoft.AspNetCore.Cors;
using dotnetapp.Services;
namespace dotnetapp.Controllers
{
    [ApiController]
    //[Route("[controller]")]
    [EnableCors("AllowOrigin")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService productService;

    public ProductController(IProductService _productService)
    {
       this.productService = _productService;
    }

    [HttpGet("admin")]
    public List<ProductModel> GetAll()
    {
        return productService.GetProductList();
    }
    [HttpGet("home")]
    public List<ProductModel> GetHomeProducts()
    {
        return productService.GetProductList();
    }

    [HttpPost("admin/addProduct")]
    public void AddProduct(ProductModel newProduct)
    {         
        ProductModel pm= new ProductModel();
        pm.productName=newProduct.productName;
        pm.description=newProduct.description;
        pm.price=newProduct.price;
        pm.imageUrl=newProduct.imageUrl;
        pm.quantity=newProduct.quantity;
        pm.productId=0;
        productService.AddProduct(pm);               
    }   

     [HttpGet("/admin/delete/{id}")]
    public bool DeleteProduct (string id)
    {
        int idc=Convert.ToInt32(id);
    return productService.DeleteProduct(idc);    
    }
   
    [HttpGet("/admin/productEdit/{id}")]      
    public ProductModel PutProductDetails(string id)  
    {
        {  
           int idc=Convert.ToInt32(id);
           return productService.getProduct(idc);
        }     
    }
    [HttpPost("/admin/productEdit/{id}")]      
    public bool PutProductDetails(int id, ProductModel myProduct)  
    {
        {  
           return productService.EditProductById(id,myProduct);
        }     
    }
}
}