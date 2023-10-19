import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} TimelineBuilder</p>
      </div>
    </footer>
  );
};

export default Footer;
