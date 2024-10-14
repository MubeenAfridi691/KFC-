const Product = require('../Model/ProjuctSchema')

exports.createproduct = async (req, res, next) => {
  
   try {
      const body = req.body;

      // Debug log to check the incoming request body
      console.log('Received body:', body);

      // Create the product
      const product = await Product.create(body);

      // Send a successful response
      return res.status(201).json({
        success: true,
        message: 'Product created successfully',
        product: product
      });

    } catch (error) {
      // Handle errors
      console.error('Error creating product:', error);
    }

  };
  

exports.allproducts= async (req,res)=>{

    try {

        const product=await Product.find()
        return res.status(200).json({
            success:true,
            message:"Product created successfully",
            product
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
        
    }
    
}
exports.singleproduct=async(req,res)=>{
try {
   const id = req.params.id
await  Product.findById(id).then((product)=>{
    return res.status(200).json({
        success:true,
        
        product
    })
   })
    
} catch (error) {
    res.status(500).json({
        success:false,
        message:"Internal server error"
    })
    
}
}
exports.updateproduct=(req,res)=>{
   const id = req.params.id
   const body = req.body
   Product.findByIdAndUpdate(id,body,{new:true}).then((product)=>{
    return res.status(200).json({
        success:true,
        message:"Product has been updated",
        product
    })
   })
}
exports.deleteproduct=(req,res)=>{
    try {
        const id = req.params.id
        Product.findByIdAndDelete(id).then((product)=>{
            return res.status(200).json({
                success:true,
                message:"Product has been deleted",
                product
            })
           })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}