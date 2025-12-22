import Product from "./Produkt";

function NewShoppingCart() {
  const products: string[] = [
    "Jabłko",
    "Gruszka",
    "Banan",
    "Pomarańcza",
    "Kiwi",
  ];

  return (
    <div>
      <h2>Mój koszyk</h2>
      <p>
        {products.map((name) => (
          <Product name={name} />
        ))}
      </p>
    </div>
  );
}

export default NewShoppingCart;
