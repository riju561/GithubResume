import React from "react"
import styles from "./resume.module.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

//React-bootstrap(3rd party library) is used to design this page
const Resume = props => {
  return (
    <div>
      {props.data === null ? null : (
        <div className={styles.div}>
          <Container fluid>
            <Row>
              <Col md={4} className={styles.left}>
                <div className={styles.imgdiv}>
                  {/* Displays the github avatar */}
                  <img
                    src={props.data["avatar_url"]}
                    alt="img"
                    className={styles.img}
                  ></img>
                  {/* Displays the name */}
                  <p className={styles.head}>{props.data["name"]}</p>
                </div>
                <div className={styles.info}>
                  <p>
                    {/* Displays the github id */}
                    <b>Github ID : </b>
                    <a href={props.data["html_url"]}>{props.data["login"]}</a>
                  </p>
                  {/* If location data exists in api gives the location */}
                  {props.data["location"] === null ? null : (
                    <p>
                      <b>Location : </b>
                      {props.data["location"]}
                    </p>
                  )}
                  <p>
                    {/* Displays the date joined on github */}
                    <b>On Github since </b>
                    {new Date(props.data["created_at"]).toLocaleDateString(
                      "en-GB"
                    )}
                  </p>
                  {/* If bio exists in api gives the bio */}
                  {props.data["bio"] === null ? null : (
                    <p>
                      <b>Bio : </b>
                      {props.data["bio"]}
                    </p>
                  )}
                  <div className={styles.info}>
                    {/* If company data exists in api gives the company/organizations */}
                    {props.data["company"] === null ? null : (
                      <p>
                        <b>Organizations : </b>
                        {props.data["company"]}
                      </p>
                    )}
                    {/* If email exists in api gives the email */}
                    {props.data["email"] === null ? null : (
                      <p>
                        <b>Email : </b>
                        {props.data["email"]}
                      </p>
                    )}
                    {/* Displays number of repos */}
                    <p>
                      <b>Number of repositories : </b>
                      {props.data["public_repos"]}
                    </p>
                    {/* Displays number of followers */}
                    <p>
                      <b>Followers : </b>
                      {props.data["followers"]}
                    </p>
                  </div>
                  {/* Displays languages used */}
                  {props.lang == null ? null : (
                    <div>
                      <p>
                        <b>Languages and Technologies used : </b>
                      </p>
                      {props.lang.map(i => (
                        <p>{i}</p>
                      ))}
                    </div>
                  )}
                </div>
              </Col>
              <Col md={8} className={styles.right}>
                {props.repo === null ? null : (
                  <div>
                    {/* Displays popular repos */}
                    <Container>
                      <p className={styles.head}>Popular repositories : </p>
                      <hr />
                      {props.repo.map(i => (
                        <div>
                          <Row>
                            <Col md={3} className={styles.topic}>
                              {i[0]}:
                            </Col>
                            <Col md={9} className={styles.content}>
                              <p>
                                {i[0]} has {i[3]} forks and {i[4]} stars
                              </p>
                              <p>Language/Technology used : {i[5]}</p>
                              <p>
                                Visit the project at <a href={i[1]}>{i[1]}</a>
                              </p>
                            </Col>
                          </Row>
                          <hr />
                        </div>
                      ))}
                    </Container>
                  </div>
                )}
                {props.contri === null ? null : (
                  <div>
                    {/* Displays Contributions */}
                    <Container>
                      <p className={styles.head}>Top Contributions : </p>
                      <hr />
                      {props.contri.map(i => (
                        <div>
                          <Row>
                            <Col md={3}>
                              <p className={styles.topic}>{i[0]}</p>
                            </Col>
                            <Col md={9}>
                              <p className={styles.content}>
                                Visit the project at <a href={i[1]}>{i[1]}</a>
                              </p>
                            </Col>
                          </Row>
                          <hr />
                        </div>
                      ))}
                    </Container>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  )
}

export default Resume
