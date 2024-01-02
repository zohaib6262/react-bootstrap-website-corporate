import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <section id="contact-us" className={`${styles.contactBlock}`}>
      <Container fluid>
        <div className={`${styles.contactTitle}`}>
          <h2>Contact US</h2>
          <span className={`${styles.subTitle}`}>get connected with us</span>
        </div>
        <Form className={` ${"w-75 m-auto"}`}>
          <Row className={`${styles.row}`}>
            <Col sm={4}>
              <FormControl
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Col>
            <Col sm={4}>
              <FormControl
                type="email"
                placeholder="Enter your email address"
              />
            </Col>
            <Col sm={4}>
              <FormControl
                type="tel"
                placeholder="Enter your contact number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <FormControl
                as="textarea"
                placeholder="Enter your message"
                required
              />
            </Col>
          </Row>
          <div className="btnHolder">
            <button type="submit" className="btn btn-danger m-3">
              Submit
            </button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.3233299148187!2d73.08280237434128!3d33.64878313892873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95b098dc6bcd%3A0xc8a76db47f0ff95c!2zQXJpZCBBZ3JpY3VsdHVyZSDYp9uM2LHaiCDYp9uM2q_YsduM2qnZhNqG2LE!5e0!3m2!1sen!2s!4v1704121176534!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <Row className={styles.rowIcons}>
          <Col sm={4}>
            <Icon.EnvelopeFill size={35} className={styles.icon} />
            <span className="d-block m-2">zohaibbinashraf259@gmail.com</span>
          </Col>
          <Col sm={4}>
            <Icon.TelephoneFill size={35} className={styles.icon} />
            <span className="d-block m-2">+92-3009731467</span>
          </Col>
          <Col sm={4}>
            <i
              className={`${
                styles.loaction
              } ${"fas fa-map-marker-alt d-block"} ${styles.icon}`}
            ></i>
            <span className="m-2 d-block"> Islamabad, Pakistan</span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
