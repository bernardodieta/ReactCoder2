import axios from "axios";
import { useEffect, useState } from "react";


const GetMenProduct = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
                setData(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return { data, error };
};


export default GetMenProduct 