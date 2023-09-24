import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
export function generateStars(rate) {
    const intStarts = Math.floor(rate);
    const floatStar = intStarts % 1;
    // console.log(floatStar);
    const stars = [];

    // Create full stars
    for (let i = 0; i < intStarts; i++) {
        stars.push(
            <span key={i} className="star full-star">
                &#9733;
            </span>
        );
    }
    if (floatStar >= 0.5) {
        stars.push(
            <span key="half" className="star half-star">
                &#9733;
            </span>
        );
    }
    return <div>{stars}</div>;
}

export default function ShopElement() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [rate, setRate] = useState();
    // const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) =>{
                setProduct(data);
                setRate(data.rating.rate);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]); // Include id in the dependency array to re-fetch data when id changes
    return (
        <>
            <div className="flex">
                <div className="basis-5/12 border-2">
                    <img
                        src={product.image}
                        alt=""
                        className="w-full rounded"
                    />
                </div>
                <div className="text-center basis-7/12 p-4">
                    <div className="text-4xl font-bold mb-5 text-blue-600">
                        {product.category}
                    </div>
                    <div className="text-lg text-gray-800">{product.title}</div>
                    <div className="text-xl font-bold text-green-600 mt-2">
                        {product.price}$
                    </div>
                    <div className="mt-3">{generateStars(rate)}</div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mt-5">
                        Add To Cart
                    </button>
                </div>
            </div>

            <div className="text-2xl font-bold align-middle">{product.description}</div>
        </>
    );
}
