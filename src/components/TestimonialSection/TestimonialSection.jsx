import { Carousel, Container, Row } from "react-bootstrap";
import styles from "./TestimonialSection.module.css";
const testimonialsData = [
  {
    id: 1,
    name: "John Wills",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.",
    designation: "Manager",
  },
  {
    id: 2,
    name: "Jasmine Perry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!",
    designation: "Accountant",
  },
  {
    id: 3,
    name: "Rocky Johnson",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?",
    designation: "CEO",
  },
];
const TestimonialSection = () => {
  return (
    <section id="testimonial" className={styles.testimonialBlock}>
      <Container fluid>
        <div className={`${styles.titleHolder} ${"text-center"}`}>
          <h2>Client testimonials</h2>
          <div className={styles.subTitle}>what client says about us</div>
        </div>
        <Carousel controls={false}>
          {testimonialsData.map((testimonials) => {
            return (
              <Carousel.Item key={testimonials.id}>
                <div className="text-center w-50 m-auto my-5">
                  <p>{testimonials.description}</p>
                  <cite>
                    <span className={styles.name}>{testimonials.name}</span>
                    <span className={styles.designation}>
                      {testimonials.designation}
                    </span>
                  </cite>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialSection;
