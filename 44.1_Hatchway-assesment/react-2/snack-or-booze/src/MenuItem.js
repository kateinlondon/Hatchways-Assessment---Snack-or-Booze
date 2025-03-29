import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";

function MenuItem({ type }) {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        async function fetchItem() {
            try {
                const res = await axios.get(`http://localhost:5000/${type}/${id}`);
                setItem(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching item:", error);
                setNotFound(true);
                setLoading(false);
            }
        }
        fetchItem();
    }, [id, type]);

    if (loading) return <p>Loading...</p>;
    if (notFound) return <Redirect to={`/${type}`} />;

    return item ? (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p><strong>Recipe:</strong> {item.recipe}</p>
            <p><strong>Serve:</strong> {item.serve}</p>
        </div>
    ) : <p>Item not found.</p>;
}

export default MenuItem;
