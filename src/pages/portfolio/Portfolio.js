import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Portfolio.css";
import { Link } from "react-router-dom";

export default class Portfolio extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="error-main">
        <Header theme={this.props.theme} />
        <div className="error-class">
          <Fade bottom duration={2000} distance="40px">
            <h1>Xin chào bro!</h1>
            {/* <h1 className="error-404">404</h1> */}
            <p>Mời bạn đến với những câu chuyện thú vị của tôi</p>
            <Link
              className="main-button"
              to="/home"
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
                display: "inline-flex",
              }}
            >
              Đến trang chủ
            </Link>
          </Fade>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
