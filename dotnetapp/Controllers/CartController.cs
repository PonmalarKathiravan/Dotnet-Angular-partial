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
    public class CartController : ControllerBase
    {
        private readonly ICartService cartService;
        private readonly IProductService productService;
    public CartController(ICartService _cartService,IProductService _productService)
    {
       this.cartService = _cartService;
        this.productService = _productService;
    }

    [HttpGet("user/{id}/cartitems")]
    public List<CartModel> GetAllCartItemsByUser(string id)
    {
        var productList = cartService.GetCartListByID(id);
        return productList;
    }

    [HttpPost("/home/{id}")]
    public void AddtoCart(string qty, string id)
    {       
        int idc=Convert.ToInt32(id);
       ProductModel p=productService.getProduct(idc); 
       CartModel cm=new CartModel();
       cm.cartId=p.productId+"";
       cm.productName=p.productName;  
       cm.price=p.price;
       cm.quantity=p.quantity+"";      
       cm.userId=qty;
       cartService.AddCart(cm);
    }   

     [HttpDelete("user/deleteCart/{id}")]
    public void DeleteCartItem(int id)
    {       
          cartService.DeleteCart(id);   
    }

    [HttpDelete("user/deleteallcartitems")]
    public void DeleteALL()
    {
         cartService.DeleteAllCart();            
    }
        
    }
}