using dotnetapp.Models;
using System.Linq;
using System.Collections.Generic;
using System;

namespace dotnetapp.Services
{
    public class ProductService : IProductService
    {
        private readonly Repository _dbContext;

        public ProductService(Repository dbContext)
        {
            _dbContext = dbContext;
        }
        public List<ProductModel> GetProductList()
        {
           return this._dbContext.ProductModels.ToList();
        }

        public ProductModel getProduct(int id)
        {
            ProductModel product = new ProductModel();  
		try {
			product = _dbContext.ProductModels.Where(x => x.productId == id).FirstOrDefault();
			if(product==null) {
				Console.WriteLine("product not found in product repo");
			}	
		} catch(Exception e) {
			Console.WriteLine("error");
		}
		return product;
        }
        public bool EditProductById(int id,ProductModel myProduct)
        {
            ProductModel objProduct = new ProductModel();  
            objProduct= _dbContext.ProductModels.Where(x => x.productId == id).FirstOrDefault();
             if (objProduct!= null)  
                {  
                    objProduct.productName = myProduct.productName;  
                    objProduct.description = myProduct.description;  
                    objProduct.price = myProduct.price;  
                    objProduct.imageUrl = myProduct.imageUrl;  
                    objProduct.quantity = myProduct.quantity;  
                }  
                int result = this._dbContext.SaveChanges();  
                if (result > 0)  
                {  
                   // message = "Product has been sussfully updated";  
                   return true;
                }
                else 
                {
                    return false;
                }   
        }

        public bool AddProduct(ProductModel product)
        {
            var result = _dbContext.ProductModels.Add(product);
            int res=_dbContext.SaveChanges();
            if(res > 0)
            {
                return true;
            }
            return false;
        }

        public ProductModel UpdateProduct(ProductModel product)
        {
            var result = _dbContext.ProductModels.Update(product);
            _dbContext.SaveChanges();
            return result.Entity;
        }
        public bool DeleteProduct(int Id)
        {
            var filteredData = _dbContext.ProductModels.Where(x => x.productId == Id).FirstOrDefault();
            var result = _dbContext.Remove(filteredData);
            _dbContext.SaveChanges();
            return result != null ? true : false;
        }
    }
}