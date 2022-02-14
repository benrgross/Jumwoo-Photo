import React, { useRef } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current.reply_to.value);

    // const re = /^\S+@\S+\.\S+$/;
    // re.test(form.current.reply_to.value);

    emailjs
      .sendForm(
        "service_ro0g6b1",
        "template_v7og5mq",
        form.current,
        "user_rX4SPIm1J7go41OthskTQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container className="contact__cont">
      <Form className="contact__form" onSubmit={sendEmail} ref={form}>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
            <Form.Label className="form__label">Name</Form.Label>
            <Form.Control type="text" name="from_name" />
          </Form.Group>
          <Form.Group
            as={Col}
            controlId="formGridEmail"
            ref={form}
            className="mb-3"
          >
            <Form.Label className="form__label">Email</Form.Label>
            <Form.Control type="email" name="reply_to" />
          </Form.Group>
        </Row>
        <Form.Group>
          <Form.Label className="form__label">Subject</Form.Label>
          <Form.Control type="subject" name="subject" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form__label">Message</Form.Label>
          <Form.Control as="textarea" name="message" />
        </Form.Group>
        <ReCAPTCHA
          className="recaptcha"
          sitekey="6LdyiHseAAAAAEazFaJIgbN1BV0FpVmPHeG9-OFZ"
          //   onChange={onChange}
        />
        <Button
          className="contact__button btn-primary"
          type="submit"
          value="Send"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};
