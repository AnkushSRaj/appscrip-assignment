import React, { useState, useEffect } from "react";
import Image from "next/image";

const ShimmerCard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating API fetching delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid gap-1 grid-cols-4 mx-8 mt-10">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => (
        <div key={card} className="col-md-4 mb-4">
          <div className="card">
            {isLoading ? (
              <div className="card-img-top" style={{ height: "400px", width:"300px" ,backgroundColor: "#ddd" }} />
            ) : (
              <Image
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="Placeholder"
              />
            )}
            <div className="card-body">
 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerCard;
