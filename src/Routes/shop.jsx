import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <ul className="grid grid-cols-3">
        {products.map((product) => (
          <li
            onClick={() => {
              navigate(`/shop/${product.id}`);
            }}
            key={product.id}
            className="p-10 m-5 border-2 relative  rounded-lg cursor-pointer"
          >
            <img
              src={product.image}
              alt=""
              className="max-w-full h-[150px] m-auto"
            />
            <div className="bg-gray-300 mt-10 p-3 rounded-lg w-full">
              {product.title}
            </div>
            <br />
            <div
              className="text-2xl font-bold	"
              style={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {product.price} $
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
