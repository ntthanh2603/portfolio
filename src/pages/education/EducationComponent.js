import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
// import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <img
                  src={require("../../assets/images/hinh-nen-cham-chi-hoc-tap-dep_085202007-fotor-2025022174948.png")}
                  alt=""
                />
                {/* <EducationImg theme={theme} /> */}
              </div>
              <div className="heading-text-div">
                {/* <h1 className="heading-text" style={{ color: theme.text }}>
                  Học vấn và chứng chỉ
                </h1> */}
                {/* <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Không bây giờ thì không bao giờ 
                </h3>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Ông trời không phụ lòng người biết cố gắng
                </h3> */}
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Trẻ em như búp trên cành
                </h3>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Biết ăn ngủ, biết học hành là ngoan
                </h3>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  -- Bác Hồ kính yêu --
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
