import Carousel from "react-bootstrap/Carousel";
import styles from "./HeroSection.module.css";
import { Button } from "react-bootstrap";
var heroData = [
  {
    id: 1,
    image: require("../../assests/images/img-hero1.jpg"),
    title: "The perfect design for your website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../../assests/images/img-hero2.jpg"),
    title: "Start Your Future Financial Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../../assests/images/img-hero3.jpg"),
    title: "Start Your Future Financial Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.facebook.com",
  },
];

function HeroSection() {
  return (
    <section id="home" className={styles.heroBlock}>
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id} className={styles.carouselItem}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide " + hero.id}
              />
              <Carousel.Caption className={styles.carouselCaption}>
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a href={hero.link}>
                  <Button className={`${styles.btn}`} variant="danger">
                    Learn More
                    <i
                      className={`${styles.fas} ${"fas fa-chevron-right"}`}
                    ></i>
                  </Button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default HeroSection;
