import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { FadeIn } from "../../../../assets/anim/index";
import { firebase } from "../../../../config/config";
import "./project-details.css";
import Loader from "../../app-splash/app-loader";
class Details extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: true,
      projectId: props.projectId,
      projectName: "",
      projectDescription: "",
      projectTitle: "",
      projectIcon: "",
      projectPlatform: "",
      downloadUrl: "",
    };
  }
  async componentDidMount() {
    await firebase
      .database()
      .ref("projects")
      .child(this.state.projectId)
      .on("value", (dara) => {
        const p = dara.val();
        console.log(p);
        this.setState({
          projectName: p.projectName,
          projectDescription: p.projectDescription,
          projectTitle: p.projectTitle,
          projectIcon: p.projectIcon,
          projectPlatform: p.platformIcon,
          downloadUrl: p.downloadUrl,
          loading: false,
        });
      });
  }

  render() {
    return (
      <FadeIn
        time=".5s"
        component={
          <div className="content-body">
            {this.state.loading === true ? (
              <Loader />
            ) : (
              <>
                <h2
                  style={{
                    backgroundColor: "#fff",
                    padding: "5px",
                    position: "absolute",
                    width: "100%",
                    zIndex: "3",
                    marginTop: "0px",
                    top: "5px",
                    color: "#729fcf",
                  }}
                >
                  {this.state.projectName}
                </h2>
                <div className="details-body">
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      className="project-logo"
                      alt="logo"
                      src={this.state.projectIcon}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        height: "100%",
                      }}
                    >
                      <h4
                        style={{
                          fontWeight: "400",
                          margin: "0",
                          fontSize: "18px",
                        }}
                      >
                        {this.state.projectTitle}
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          marginBottom: "10px",
                          marginTop: "auto",
                        }}
                      >
                        <div
                          className="btn-open-link"
                          onClick={() => {
                            window.open(this.state.downloadUrl, "_blank");
                          }}
                        >
                          <p>Open Link</p>
                        </div>
                        <img
                          className="project-platform"
                          src={this.state.projectPlatform}
                          alt="logo"
                        />
                      </div>
                    </div>
                  </div>
                  <h5
                    style={{
                      fontWeight: "600",
                      margin: "0",
                      fontSize: "18px",
                    }}
                  >
                    Description
                  </h5>
                  <span
                    style={{
                      fontWeight: "500",
                      margin: "0",
                      fontSize: "18px",
                    }}
                  >
                    {this.state.projectDescription}
                  </span>
                </div>
              </>
            )}
          </div>
        }
      />
    );
  }
}
export const ProjectDetails = () => {
  let { id } = useParams();
  return <Details projectId={id} />;
};
