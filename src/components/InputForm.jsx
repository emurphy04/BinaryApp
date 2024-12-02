import React, { useState } from "react";
import Header from "./Header";

const InputForm = () => {
  const [numbers, setNumbers] = useState("");
  const [tree, setTree] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/process-numbers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(numbers.split(",").map(Number)),
      });

      if (!response.ok) {
        throw new Error("Failed to process the numbers.");
      }

      const data = await response.json();
      setTree(data);
    } catch (error) {
      console.error("Error processing numbers:", error);
      alert("Failed to process the numbers.");
    }
  };

  return (
    <>
        <Header></Header>
        <div>
        <h2>Create Binary Search Tree</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter numbers separated by commas"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            required
            />
            <button type="submit">Submit</button>
        </form>
        {tree && (
            <div>
            <h3>Generated Binary Tree</h3>
            <pre>{JSON.stringify(tree, null, 2)}</pre>
            </div>
        )}
        </div>
    </>
  );
};

export default InputForm;

