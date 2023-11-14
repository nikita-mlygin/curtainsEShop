import { FC } from "react";
import Product from "../Product";
import { Box, Button, IconButton, ToggleButton, Typography, styled } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Favorite, Image } from "@mui/icons-material";

interface ProductFullViewProps
{
  product: Product,
}

interface PriceProps {
  price: number,
}

const Price: FC<PriceProps> = (props) => (
  <Typography color="text.primary" sx={{ fontWeight: "bold" }}>
    Price:
    <Typography component="span" sx={{ ml: 0.5 }} fontSize="1.2em">
      ${props.price.toFixed(2)}
    </Typography>
  </Typography>
);


interface WishListProps {
  isInWishList: boolean,
}

const WishList: FC<WishListProps> = (props) => (
  !props.isInWishList ?
  <Button variant="text" size="small" startIcon={<Favorite />} color="secondary">Add to favorite</Button> : 
  <Button variant="text" size="small" color="secondary">Remove from favorite</Button>
  );

const ProductFullView: FC<ProductFullViewProps> = (props) =>
{
  const { product } = props;

  return (
    <Box sx={{display: 'grid', gridTemplateColumns: "1fr 1fr", gap: 10}}>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: "space-between"}}>
        <Box>
          <Typography color='text.primary' variant="h3">{product.name}</Typography>
          <Typography color='text.secondary' variant="caption">{product.description}</Typography>
        </Box>
        <Box>
          <Box alignItems='center' sx={{display: 'flex', justifyContent: 'space-around', mt: 10, mb: 3}}>
            <Price price={product.price} />
            <Button startIcon={<ShoppingBasketIcon />} variant="contained">Add to cart</Button>
          </Box>
          <WishList isInWishList={false} />
        </Box>
      </Box>
      
      <Box component='img' src="/vite.svg" width={1} />
    </Box>
  );
}

export default ProductFullView;