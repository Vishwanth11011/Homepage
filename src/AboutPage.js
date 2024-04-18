import React from "react";
import Card from "./Card";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Card
        title="About Us"
        image="https://via.placeholder.com/150"
        description="This is our company's webpage.Explore our servicces through our web page"
      />
    </div>
  );
};

export default AboutPage;
