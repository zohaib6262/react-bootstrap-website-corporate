import { Col, Container, Image, ProgressBar, Row } from "react-bootstrap";
import styles from "./AboutSection.module.css";
import img1 from "../../assests/images/img1.jpg";
const AboutSection = () => {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;
  return (
    <section id="about" className={`${styles.block} ${styles.aboutBlock}`}>
      <Container fluid className={styles.container}>
        <div>
          <h2 className={styles.titleHolder}>About us</h2>
          <div className={styles.subTitle}>learn more about us</div>
        </div>
        <Row>
          <Col xxl="6" xl="6" lg="6" md="6" sm="4">
            <Image src={img1} className={styles.img} />
          </Col>
          <Col xxl="6" xl="6" lg="6" md="6" sm="8" className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit dicta veritatis sint quidem asperiores magni eaque
              praesentium temporibus, magnam, eveniet consequatur possimus
              nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              alias ex error distinctio laudantium recusandae, iure. Vel nisi
              soluta, minus consectetur reiciendis laborum, laudantium
              perspiciatis quos molestias quam eum.
            </p>
            <div className={styles.progressBlock}>
              <h4>HTML / CSS / Javascript</h4>
              <ProgressBar
                striped
                now={html}
                label={`${html}%`}
                variant="danger"
              />
            </div>
            <div className={styles.progressBlock}>
              <h4>responsive</h4>
              <ProgressBar
                striped
                now={responsive}
                label={`${responsive}%`}
                variant="danger"
              />
            </div>

            <div className={styles.progressBlock}>
              <h4>Photoshop</h4>
              <ProgressBar
                striped
                now={photoshop}
                label={`${photoshop}%`}
                variant="danger"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
    </section>
  );
};

export default AboutSection;
