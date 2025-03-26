import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Menu({ type }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`http://localhost:5000/${type}`);
                setItems(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to load data.");
                setLoading(false);
            }
        }
        fetchData();
    }, [type]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            {items.length === 0 ? <p>No items available.</p> : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <Link to={`/${type}/${item.id}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Menu;
