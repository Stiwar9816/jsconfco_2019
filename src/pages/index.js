import React from "react";
import Layout from "../components/layout";
import Team from "../components/section_team";
import Venue from "../components/section_venue";
import "./styles.scss";

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Venue />
        <Team />
      </Layout>
    );
  }
}

export default IndexPage;
