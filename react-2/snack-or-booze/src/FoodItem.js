import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import axios from "axios";

function FoodItem({ type, cantFind }) {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getItem() {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/${type}/${id}`);
        console.log(res)
        setItem(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data.");
        setLoading(false);
      }
    }
    getItem();
  }, [id])

  return (
    <section>
      {
        !loading ? <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {item.name}
            </CardTitle>
            <CardText className="font-italic">{item.description}</CardText>
            <p>
              <b>Recipe:</b> {item.recipe}
            </p>
            <p>
              <b>Serve:</b> {item.serve}
            </p>
          </CardBody>
        </Card> :
          <span>Loading ...</span>
      }
    </section>
  );
}

export default FoodItem;
