import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Typography,Button, IconButton,CardActions, Stack,Box,Rating } from '@mui/material';



const Product = ({item}) => {
  return (
    
    <Card 
       sx={{height:{md:"480px" ,sm:"400px"} }}  
       raised={true}> 
  {/* md:"302px", */}
      <CardMedia
      component="img"
      alt="product" 
      image={item.image}
    />
  
    <CardContent sx={{height:"100px" ,overflow:"hidden"}}  >
      <Typography variant="subtitle1" component="div" sx={{fontFamily: "Poppins",
      fontSize:".9rem",fontWeight:"bold",textAlign:"center"}}>
        {item.title}
      </Typography>
    </CardContent>
    <Stack direction="row" justifyContent="space-between" px={6} >
      <Box sx={{fontWeight:"bold"}}>${item.price}</Box>
      <Box>
         <Rating name="read-only" value={5} readOnly />
      </Box>
    </Stack>
    <CardActions>
      <Button size="large" variant='contained' sx={{margin:"10px auto"}}>Add to Cart</Button>
      
    </CardActions>
  </Card>
)
  
}

export default Product