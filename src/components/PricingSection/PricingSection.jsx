import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import styles from "./PricingSection.module.css";
const PricingSection = () => {
  const pricingData = [
    {
      id: 1,
      plan: "Basic",
      price: "£49",
      features: [
        "Wireframing",
        "Visual Design",
        "5 pages",
        "Free Hosting",
        "Support & Assistance",
      ],
      link: "https://www.google.com",
    },
    {
      id: 2,
      plan: "Premium",
      price: "£149",
      features: [
        "Wireframing",
        "Visual Design",
        "15 pages",
        "Free Hosting",
        "Support & Assistance",
      ],
      link: "https://www.facebook.com",
    },
    {
      id: 3,
      plan: "Ultimate",
      price: "£349",
      features: [
        "Wireframing",
        "Visual Design",
        "Unlimited pages",
        "Free Hosting",
        "Support & Assistance",
      ],
      link: "https://www.twitter.com",
    },
  ];

  return (
    <section id="pricing" className={`${styles.pricingBlock}`}>
      <Container>
        <div className={`${styles.titleHolder}`}>
          <h2>Pricing &amp; plans</h2>
          <div className={`${styles.subTitle}`}>
            check our pricing &amp; plans
          </div>
        </div>
        <Row className={styles.row}>
          {pricingData.map((pricing) => {
            return (
              <Col sm={4} key={pricing.id}>
                <div className={styles.heading}>
                  <h3>{pricing.plan}</h3>
                  <span className={styles.price}>{pricing.price}</span>
                </div>
                <div className={styles.content}>
                  <ListGroup>
                    {pricing.features.map((feature, index) => {
                      return (
                        <ListGroupItem
                          key={index}
                          className={styles.listGroupItem}
                        >
                          {feature}
                        </ListGroupItem>
                      );
                    })}
                  </ListGroup>
                </div>
                <div className={styles.btnHolder}>
                  <a href={pricing.link} className="btn btn-danger">
                    Order Now
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default PricingSection;
