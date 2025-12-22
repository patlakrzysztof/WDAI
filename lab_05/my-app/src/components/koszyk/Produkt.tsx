interface ProductProps {
  name: string;
}

function Product(props: ProductProps) {
  return <p>Produkt: {props.name}</p>;
}

export default Product;
