import Product from "./Produkt";

function ShoppingCart() {
  return (
    <div>
      <h2>Mój koszyk</h2>
      <Product name="Jabłko" />
      <Product name="Gruszka" />
      <Product name="Banan" />
      <Product name="Pomarańcza" />
      <Product name="Kiwi" />
    </div>
  );
}

export default ShoppingCart;
