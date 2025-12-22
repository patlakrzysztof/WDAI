import { useState } from "react";

function Update() {
  const [product, setProduct]: any = useState({
    name: "Pomidor",
    price: 50,
  });

  const changePrice = () => {
    setProduct((prev: any) => ({
      ...prev,
      price: 100,
    }));
  };

  return (
    <div>
      <p>
        Aktualnie {product.name} kosztuje {product.price}
      </p>
      <button onClick={changePrice}>Zmień cenę</button>
    </div>
  );
}

export default Update;
