import React from "react";
import { Col, Button, Form,Row } from "react-bootstrap";

import "./form.css"

function Forme() {
  return (
    <div className="fm background">
        <div  className="form">
          <h1>Personal:</h1>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="email" placeholder="Please enter your first name.." />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="password" placeholder="Please enter your last name.." />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="please enter your address" />
        </Form.Group>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Mobile Phone No.</Form.Label>
          <Form.Control placeholder="Your phone number here.." />
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Home Phone No.</Form.Label>
          <Form.Control placeholder="Your home number here.." />
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>work Phone No.</Form.Label>
          <Form.Control placeholder="Your work number here.." />
        </Form.Group>
        </Form.Row>

        <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Areas of interests
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Social"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Administrative"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Artistic"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
         <Form.Check
          type="radio"
          label="Enterprising"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
                 <Form.Check
          type="radio"
          label="Investigating"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>
        
        

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>State</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <div className="mb-3">
    <Form.File id="formcheck-api-regular">
      <Form.File.Label>Download your CV from here</Form.File.Label>
      <Form.File.Input />
    </Form.File>
  </div>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  );
}

export default Forme;
