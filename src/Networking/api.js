export const Api=async(skip)=>{
    try
    {
        const response=await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
        const data=await response.json()
        console.log(data)
        if(data){
            return(
                {
                    success:true,
                    result:data.products
                }
            )
        }
    }
    catch(err){
        return(
            {
              result:err,
              success:false
            }
        )
    }

}