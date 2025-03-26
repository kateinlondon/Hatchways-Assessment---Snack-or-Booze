import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import slugify from "slugify";

function AddItemForm() {
    const [formData, setFormData] = useState({ name: "", description: "", recipe: "", serve: "", type: "snacks" });
    const history = useHistory();

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const newItem = { ...formData, id: slugify(formData.name, { lower: true }) };
        await axios.post(`http://localhost:5000/${formData.type}`, newItem);
        history.push(`/${formData.type}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} required />
            <input name="description" placeholder="Description" onChange={handleChange} required />
            <input name="recipe" placeholder="Recipe" onChange={handleChange} required />
            <input name="serve" placeholder="Serve" onChange={handleChange} required />
            <select name="type" onChange={handleChange}>
                <option value="snacks">Snack</option>
                <option value="drinks">Drink</option>
            </select>
            <button type="submit">Add Item</button>
        </form>
    );
}

export default AddItemForm;
