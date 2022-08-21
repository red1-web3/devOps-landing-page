import React from "react";
import Title from "./Title";
import ParaText from "./ParaText";

function AboutOurDevConsutancy() {
  return (
    <div className="space-y-6 __aboutConsultancyText translate-x-32 opacity-0">
      <Title white={`About Our DevOps`} yellow="Consultancy" />

      <ParaText
        yellow="DevOps Consultancy "
        white="is a deeply credentialed, award-winning provider of AWS and DevOps consulting and implementation services. We are an integrated team of skilled engineers, architects, developers, project managers, and sales & marketing professionals who are passionate about client success, software excellence, and innovation. We enable our clients to deliver better products faster and create awesome customer experiences. Rapyder is a Global cloud consulting Partner, providing Cloud Consulting,"
      />
    </div>
  );
}

export default AboutOurDevConsutancy;
