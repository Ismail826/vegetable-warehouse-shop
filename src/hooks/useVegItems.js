import { useEffect, useState } from "react";

const useVegItems = () => {

    const [vegetable, setVegetable] = useState([]);

    useEffect(() => {

        const url = `https://vegetable-warehouse-shop-server.vercel.app/addItem`;
        fetch(url)
            .then(res => res.json())
            .then(data => setVegetable(data))
    }, []);

    return [vegetable, setVegetable]
}

export default useVegItems;