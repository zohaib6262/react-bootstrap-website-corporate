import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";
import * as Icon from "react-bootstrap-icons";

const Footer = () => {
  return (
    <Container fluid className={styles.container}>
      <Row>
        <div className="copyright text-center pt-5">
          &copy; 2022 Corporate. All Right Reserved.
        </div>
      </Row>
      <Row className="text-center">
        <Col>
          <Icon.Facebook size={25} />
        </Col>
        <Col>
          <Icon.Github size={25} />
        </Col>
        <Col>
          {" "}
          <Icon.Linkedin size={25} fontVariant="red" />
        </Col>{" "}
      </Row>
    </Container>
  );
};

export default Footer;
