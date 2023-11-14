import { FC } from "react";
import Product from "../Product";
import { Favorite, ShoppingBasketOutlined } from "@mui/icons-material";
import { Card, CardHeader, CardContent, Typography, CardActions, IconButton, Button, CardMedia } from "@mui/material";
import { red } from "@mui/material/colors";

interface ProdcutItemViewProps 
{
    product: Product,
};

const ProductItemView: FC<ProdcutItemViewProps> = (props) =>
{
    const { product } = props;

    return (
      <Card>
        <CardMedia image="/vite.svg" sx={{ height: 150 }} />
        <CardHeader title={product.name} />
        <CardContent>
          <Typography color="text.secondary">Price: {product.price}</Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <Favorite style={product.isFavorite ? { color: red[500] } : {}} />
          </IconButton>
          <Button size="small">See more</Button>
          <IconButton><ShoppingBasketOutlined /></IconButton>
        </CardActions>
      </Card>
    );
}

export default ProductItemView;