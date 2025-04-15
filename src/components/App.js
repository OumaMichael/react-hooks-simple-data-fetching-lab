import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // Fetch a random dog image
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
      });
  }, []); // Empty dependency array = run once when component mounts

  return (
    <div className="App">
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
