import './App.css'
import ProductFullView from './Features/Product/FullView/ProductFullView';
import ProductListView from './Features/Product/List/ProductListView';
import Product from './Features/Product/Product'

function App() {
  const testProductList: Product[] = [
    {
      id: "1",
      name: "The best product",
      description: "So its the best product in the world",
      price: 23,
      isFavorite: false,
    },
    {
      id: "2",
      name: "The best productfljasdklfjas dfjaskdlfkl",
      description:
        "So its the best produc jasdfjalk sdjfkljlksdjflt in the world",
      price: 23,
      isFavorite: true,
    },
    {
      id: "3",
      name: "The best productfljasdklfjas dfjaskdlfkl",
      description:
        "So its the best produc jasdfjalk sdjfkljlksdjflt in the world",
      price: 23,
      isFavorite: true,
    },
    {
      id: "4",
      name: "The best productfljasdklfjas dfjaskdlfkl",
      description:
        "So its the best produc jasdfjalk sdjfkljlksdjflt in the world",
      price: 23,
      isFavorite: true,
    },
    {
      id: "5",
      name: "The best productfljasdklfjas dfjaskdlfkl",
      description:
        "So its the best produc jasdfjalk sdjfkljlksdjflt in the world",
      price: 23,
      isFavorite: true,
    },
    {
      id: "6",
      name: "The best productfljasdklfjas dfjaskdlfkl",
      description:
        "So its the best produc jasdfjalk sdjfkljlksdjflt in the world",
      price: 23,
      isFavorite: true,
    },
  ];

  return (
    <ProductFullView product={testProductList[0]} />
  )
}

export default App
