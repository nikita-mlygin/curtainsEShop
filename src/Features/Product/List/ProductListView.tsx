import { FC, useState } from "react";
import Product from "../Product";
import ProductItemView from "../Item/ProductItemView";
import { Box } from "@mui/material";

interface ProductListViewProps
{
    productList: Product[];
}

const ProductListView: FC<ProductListViewProps> = (props) => {
    const [productList, setProductList] = useState(props.productList);
    
    return (
      <Box sx={{ display: "flex", gap: 1, flexWrap: 'wrap' }}>
        {productList.map((e) => (
          <Box key={e.id} width={"calc(33% - 5px)"}>
            <ProductItemView product={e} />
          </Box>
        ))}
      </Box>
    );
}

export default ProductListView;