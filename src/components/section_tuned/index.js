import React, { Component } from "react";
import "./index.scss";
import Jsconfco01 from "../images/jsconfco_galley01";
import Jsconfco02 from "../images/jsconfco_gallery02";
import Jsconfco03 from "../images/jsconfco_gallery03";
import Jsconfco04 from "../images/jsconfco_gallery04";
export default class sectionStayTuned extends Component {
  render() {
    return (
      <div className="section-tuned__background">
        <div className="row">
          <div className="col s12 m12 l12 xl12">
           <div className="section-tuned__2018">
            <h3>Take a look at </h3>
            <a href="https://lightroom.adobe.com/shares/778a6226c7094f3f9f9a266de2ea09ed/albums/f2616242ceb84063ae0227aaf0325251/assets/ee3ea3371bee427d96a22aa8327f098c">
              JSConf.co 2018
            </a>
           </div>
            <figure className="section-tuned__img">
              <Jsconfco01 /> <Jsconfco02 /> <Jsconfco03 /> <Jsconfco04 />
            </figure>
          </div>

          <div className="section-tuned-Signup">
            <div className="col s12 m12 l12 xl12">
              <h2>STAY TUNED</h2>
              <p>Subcribe to our newsletter to stay informed about us.</p>
            </div>
            <div className="col s12 m12 l12 xl5">
              <div className="input-field">
                <input
                  type="email"
                  className="section-tuned__input-signup"
                  placeholder="Your Email..."
                />
              <a
                className="btn waves-effect waves-light section-tuned__btn-signup"
                type="submit"
              >
                Subcribe
              </a>
              </div>

              <div className="section-tuned__Follow col s12 m12 l12 xl12">
                <h3>Follow us!</h3>
                <div className="networks">
                  <a
                    href="https://twitter.com/jsconfco"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                  <a
                    href="https://www.instagram.com/jsconfco"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
