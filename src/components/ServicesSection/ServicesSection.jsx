import { Col, Container, Row } from "react-bootstrap";
import styles from "./ServicesSection.module.css";
const ServicesSection = () => {
  const servicesData = [
    {
      id: 1,
      icon: "fas fa-clone",
      title: "Responsive Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 2,
      icon: "fas fa-snowflake",
      title: "Creative Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 3,
      icon: "fas fa-plug",
      title: "SEO Optimized",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 4,
      icon: "fas fa-desktop",
      title: "Retina Ready",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 5,
      icon: "fas fa-trophy",
      title: "Brower Compatibility",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 6,
      icon: "fas fa-life-ring",
      title: "Customer Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
  ];

  return (
    <section id="services" className={styles.servicesBlock}>
      <Container className={styles.container}>
        <div className={styles.titleHolder}>
          <h2>Our Servics</h2>
          <div className={styles.subTitle}>services we provide</div>
        </div>
        <Row>
          {servicesData.map((service) => {
            return (
              <Col
                key={service.id}
                sm="6"
                xxl="4"
                xl="4"
                lg="4"
                md="4"
                className={styles.holder}
              >
                <div className={styles.icon}>
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
      <hr />
    </section>
  );
};

export default ServicesSection;
