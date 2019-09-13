import React, { Component } from "react";
import "./index.scss";
import AdrianEstrada from "../images/team_adrian";
import JulianaGomez from "../images/team_juliana";
import MariaVelandia from "../images/team_maria";
import Nataly from "../images/team_nataly";
import MilenaSuarez from "../images/team_milenaSuarez";
import LizParody from "../images/team_lizparody";
import LauraCiro from "../images/team_lauraciro";
import Julian from "../images/team_julian";
import Jhonatan from "../images/team_jhonatan";
import Jesee from "../images/team_jesee";
import JennyMazo from "../images/team_jennymazo";
import DavidAvellaneda from "../images/team_davidAvellaneda";
import Catherine from "../images/team_catherine";
import Buritica from "../images/team_buritica";
import MarianaMendivil from "../images/team_mariana";
import Hamilton from "../images/team-hamilton";
import Stiwar from "../images/team-stiwar";

export default class sectionTeam extends Component {
  render() {
    return (
      <div className="section-team__background">
        <h2>TEAM</h2>
        <div className="container">
          <article className="section-team__members">
            <div className="section-team__data">
              <div className="row">
                <figure className="section-team__avatar">
                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <Buritica />
                      <div className="section-team__role">
                        <h5>Juan Pablo Buritica</h5>
                        <p> CM - Finance</p>
                        <a
                          href="https://twitter.com/buritica"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <div className="section-team__role_invertd">
                        <h5> Juliana Gomez</h5>
                        <p> Directors / Content</p>
                        <div className="section-team__social">
                          <a
                            href="https://twitter.com/gmzjuliana"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-twitter" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <JulianaGomez />
                  </div>
                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <LizParody />
                      <div className="section-team__role">
                        <h5>Liz Parody</h5>
                        <p>Directors / Scholarship</p>
                        <a
                          href="https://twitter.com/lizparody23"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <div className="section-team__role_invertd">
                        <h5>Catherine Lopez</h5>
                        <p>Directors</p>
                        <a
                          href="https://twitter.com/LopezCatherine"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                      <Catherine />
                    </div>
                  </div>
                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <Julian />
                      <div className="section-team__role">
                        <h5>Julian Duque</h5>
                        <p>Directors</p>
                        <a
                          href="https://twitter.com/julian_duque"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <div className="section-team__role_invertd">
                        <h5> Adrian Estrada</h5>
                        <p>Directors</p>
                        <a
                          href="https://twitter.com/edsadr"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                    </div>
                    <AdrianEstrada />
                  </div>

                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <MariaVelandia />
                      <div className="section-team__role">
                        <h5> Maria Velandia</h5>
                        <p>Logistics</p>
                        <a
                          href="https://twitter.com/manvedu"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <div className="section-team__role_invertd">
                        <h5>
                          Laura <br /> Ciro
                        </h5>
                        <p>Scholarship</p>
                        <a
                          href="https://twitter.com/ltciro"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                      <LauraCiro />
                    </div>
                  </div>
                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <Nataly />
                      <div className="section-team__role">
                        <h5> Nataly Villamor</h5>
                        <p>Scholarship</p>

                        <a
                          href="https://twitter.com/nathalyvillamor"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <Jesee />
                      <div className="section-team__role">
                        <h5>Jesee Cogollo</h5>
                        <p>Directors / Scholarship</p>
                        <a
                          href="https://www.twitter.com/JesseCogollo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <DavidAvellaneda />
                      <div className="section-team__role">
                        <h5>David Avellaneda</h5>
                        <p>Directors</p>
                        <a
                          href="https://twitter.com/davsket"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <div className="section-team__role_invertd">
                        <h5> Milena Suarez</h5>
                        <p>Comms</p>
                        <a
                          href="https://twitter.com/milena_suarezl"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                    </div>
                    <MilenaSuarez />
                  </div>
                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <JennyMazo />
                      <div className="section-team__role">
                        <h5>
                          Jenny <br /> Mazo
                        </h5>
                        <p>Comms</p>
                        <a
                          href="https://twitter.com/JenyMzo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <div className="section-team__role_invertd">
                        <h5>Mariana Mendivil</h5>
                        <p>Logistics</p>
                        <a
                          href="https://twitter.com/mari_mendidu"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                      <MarianaMendivil />
                    </div>
                  </div>
                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <Jhonatan />
                      <div className="section-team__role">
                        <h5>Jonathan Avendaño</h5>
                        <p>Logistics</p>
                        <a
                          href="https://twitter.com/jdavidavendano"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <div className="section-team__role_invertd">
                        <h5>Stiwar Asprilla</h5>
                        <p>Team Web</p>
                        <a
                          href="https://www.instagram.com/jsconfco"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                      <Stiwar />
                    </div>
                  </div>
                  <div className="col s12 m12 l12 xl12">
                    <div className="section-team__description">
                      <Hamilton />
                      <div className="section-team__role">
                        <h5>Hamilton Galeano</h5>
                        <p>Team Web</p>
                        <a
                          href="https://www.instagram.com/jsconfco"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
