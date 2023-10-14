import { useEffect, useState } from "react";

const useVegItems = () => {

    const [vegetable, setVegetable] = useState([]);

    useEffect(() => {

        const url = `http://localhost:5000/addItem`
        fetch(url)
            .then(res => res.json())
            .then(data => setVegetable(data))
    }, []);

    return [vegetable, setVegetable]
}

export default useVegItems;