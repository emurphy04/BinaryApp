import React, { useEffect, useState } from "react";
import Header from "./Header";

const PreviousTrees = () => {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/previous-trees", {
          method: "GET",
          headers: {
            "Accept": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch previous trees.");
        }

        const data = await response.json();
        setTrees(data);
      } catch (error) {
        console.error("Error fetching trees:", error);
        alert("Failed to fetch previous trees.");
      }
    };

    fetchTrees();
  }, []);

  return (
    <>
        <Header></Header>
        <div>
        <h2>Previous Trees</h2>
        <ul>
            {trees.map((tree) => (
            <li key={tree.id}>
                <p>
                <strong>Numbers:</strong> {tree.numbers.join(", ")}
                </p>
                <pre>
                <strong>Tree Structure:</strong> {tree.treeStructure}
                </pre>
            </li>
            ))}
        </ul>
        </div>
    </>
  );
};

export default PreviousTrees;

