import React, { Component } from "react";
import { FadeIn } from "../../../assets/anim/fade-in/anim";
import { H20, H40 } from "../../../assets/components/spacer";
import "./app-about.css";
export default class About extends Component {
  render() {
    return (
      <FadeIn
        time=".5s"
        component={
          <div className="content-body">
            <h2
              style={{
                backgroundColor: "#fff",
                padding: "5px",
                position: "absolute",
                width: "100%",
                marginTop: "0px",
                zIndex: "3",
                top: "5px",
                color: "#729fcf",
              }}
            >
              Full-Stack Developer
            </h2>
            <div className="about-content">
              <h3>Introduction</h3>
              <p>
                I am a mostly self-taught full-stack developer who has fancied
                the powers of computing ever since I ﬁrst used a computer. I
                work to create powerful and scalable software while maintaining
                good programming practices and authoring eﬃcient and reusable
                code.
              </p>
              <H20 />
              <h3>Education</h3>
              <h4>Bsc. Computer Science</h4>
              <h5>Kabarak University, September 2017 to Present</h5>
              <p>Major in software engineering and development.</p>
              <H20 />
              <h4>Kenya Certificate of Secondary Education</h4>
              <h5>Chuka High School, February 2013 to December 2016</h5>
              <p>
                Attained an overall grade of B- and scored an A in Computer
                Studies.
              </p>
              <H20 />
              <h3>Work Expirence</h3>
              <h4>Senior Developer</h4>
              <h5>iCropal, November 2019 to June 2020</h5>
              <p>
                iCropal is a startup from my university. We were developing a
                mobile application that uses machine learning and custom vision
                to scan for pests and diseases in crops and plants. My work at
                iCropal included:
              </p>
              <ul>
                <li>
                  <p>
                    Intergating the tensorflow ml model with the android
                    application.
                  </p>
                </li>
                <li>
                  <p>Designing and building the mobile platform. </p>
                </li>
                <li>
                  <p>
                    Designing and structuring data models and genetic
                    algorithims.
                  </p>
                </li>
                <li>
                  <p></p> Setting up the mobile appilcations severs and sever
                  functions.
                </li>
              </ul>
              <H20 />
              <h3>Certificates and Awards</h3>
              <h4>
                Certificate of Participation in the Kenya National Science Fair
              </h4>
              <h5>Bishop Gatimu Nyeri, 2016</h5>
              <p>
                My project was a Information System for police records. It had
                the ability to send automated email to next of kins for newly
                arrested citizens. I built the whole system from scratch on
                visual basic. I taught myself visual basic in the process.
              </p>
              <H20 />
              <h4>
                Certificate of Commendation in the HighLands Regional Science
                Fair
              </h4>
              <h5>Embu, 2016</h5>
              <p>
                I attained first position in the fair qualifying for nationals.
                This is after barely made it through the district fair and had
                attained second position at the county's fair. I honeslty did
                not think I would win.
              </p>
              <H20 />
              <h3>Personal Information</h3>
              <h5>Name: Ian Mugambi Muriithi</h5>
              <h5>Date of Birth: 18th November, 1998</h5>
              <h5>Nationality: Kenyan</h5>
              <h5>Languages: English and Swahili</h5>
              <H40 />
            </div>
          </div>
        }
      />
    );
  }
}
