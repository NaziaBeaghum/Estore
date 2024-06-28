import React, { useEffect } from "react";
import { fetchproducts } from "../Features/ProductSlice";
import { useDispatch,useSelector } from "react-redux";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Product from "./Product";
import { Grid, Typography } from "@mui/material";




const Home=()=>{
    const dispatch=useDispatch()
    
    useEffect(()=>{dispatch(fetchproducts())},[])
    const allproducts=useSelector((state)=>state.productitems)
    console.log(allproducts)
return(
<>
 {/* <Stack direction={{xs:"column",sm:"row"} } 
        flexWrap={"wrap"} 
        gap={4} 
        justifyContent="center"
        p={2}
        
     > */}

     <Typography textAlign="center"fontWeight="bold" variant="h5" color="text.secondary">Fake Store API</Typography>
     <Grid container  justifyContent="center"  spacing={4} p={2} >
        {allproducts.loading&&<p>Loading</p>}
        {allproducts.productlist?.map((item)=>(
   < Grid item  xs={12}  sm={4} md={4}   lg={3} key={item.id}>
       <Product item={item}/>
   </ Grid>))} 

</Grid>
</>
)
}
export default Home