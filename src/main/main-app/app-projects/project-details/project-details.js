import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { FadeIn } from "../../../assets/anim/fade-in/anim";
import { firebase } from "../../../../config/config";
import "./project-details.css";
import Loader from "../../app-splash/app-loader";
class Details extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      projectId: this.props.projectId,
      projectName: "",
      projectDescription: "",
      projectTitle: "",
      projectIcon: "",
      projectPlatform: "",
    };
  }
  async componentDidMount() {
    await firebase
      .database()
      .ref("projects")
      .child(this.state.projectId)
      .on("value", (dara) => {
        const p = dara.val();
        this.setState({
          projectName: p.projectName,
          projectDescription: p.projectDescription,
          projectTitle: p.projectTitle,
          projectIcon: p.projectIcon,
          projectPlatform: p.projectPlatform,
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
            {this.state.loading === false ? (
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
