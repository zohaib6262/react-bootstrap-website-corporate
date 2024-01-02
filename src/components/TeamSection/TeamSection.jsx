import styles from "./TeamSection.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
const TeamSection = () => {
  const teamsData = [
    {
      id: 1,
      image: require("../../assests/images/team1.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Gabriel Hart",
      designation: "CEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 2,
      image: require("../../assests/images/team2.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "David Antony",
      designation: "Manager",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 3,
      image: require("../../assests/images/team3.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Nicholas Perry",
      designation: "UX Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 4,
      image: require("../../assests/images/team4.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Sarah Wills",
      designation: "Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 5,
      image: require("../../assests/images/team5.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Sophia Pitt",
      designation: "Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 6,
      image: require("../../assests/images/team6.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Taylor Lopez",
      designation: "Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 7,
      image: require("../../assests/images/team7.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Ryan Giggs",
      designation: "Content Writer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 8,
      image: require("../../assests/images/team8.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "David Smith",
      designation: "SEO Expert",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
  ];

  return (
    <section id="team" className={styles.teamBlock}>
      <Container className={styles.container}>
        <div className={styles.titleHolder}>
          <h2>Our Team</h2>
          <div className={styles.subTitle}>some of our experts</div>
        </div>
        <Row>
          {teamsData.map((team) => {
            return (
              <Col
                key={team.id}
                sm="6"
                xxl="3"
                xl="3"
                lg="3"
                md="4"
                className="mt-3"
              >
                <div className={styles.image}>
                  <Image src={team.image} className={styles.img} />
                  <div className={styles.overlay}>
                    <div className={styles.socials}>
                      <ul>
                        <li>
                          <a href={team.fbLink}>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href={team.twitterLink}>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href={team.linkedinLink}>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.content}>
                  <h3>{team.name}</h3>
                  <span className={styles.designation}>{team.designation}</span>
                  <p>{team.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default TeamSection;
