import React from "react";
import { Col, Button, Navbar  } from "react-bootstrap";

import "./form.css"

function Bar() {
  return ( 
 <Navbar bg="dark">
     <h1 class="title">Application Form</h1>
  <Navbar.Brand href="#home">
    <img
      src="/bag.jpg.svg"
      width="10"
      height="10"
      className="d-inline-block align-top"
      
    />
  </Navbar.Brand>
</Navbar>
  );
}

export default Bar;