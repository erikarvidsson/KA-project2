import React, { useState } from "react";
import styled from "styled-components";



const Layout = (props) => {
  const [liked, setLiked] = useState(0)
  const [buttonColor, setButtonColor] = useState('red')

  const Button = styled.button`
    position: absolute;
    z-index: 999;
    height: 50px;
    width: 50px;
    margin: 0 auto;
    text-align: center;
  
    background-color:${buttonColor};
  `; 


  console.log(sessionStorage.getItem("liked"));
  console.log(liked);

  const setSubmit = () => {
    if (liked === 0) {
      setLiked(liked + 1);
      setButtonColor("red");
      sessionStorage.setItem('liked', liked);

      
      
    } else {
      setLiked(liked - 1);
      setButtonColor("blue");
      sessionStorage.setItem("liked", liked);
    }
  };
  
  return (
  <Button {...props}  onClick={setSubmit} />
  )
};

export default Layout;
