import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="w-[60px] h-[60px] hover:bg-[#FF76CE]">
      <img
        className="w-[50px] h-[50px] "
        src="../../../../public/st_small_507x507-pad_600x600_f8f8f8-removebg-preview.png"
      />
    </Link>
  );
};

export default Logo;
