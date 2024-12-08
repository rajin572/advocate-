import React from "react";
import ServiceHighlights from "./ServiceHighlights";
import ComparisonTable from "./ComparisonTable";
import HowItWorkMain from "./HowItWorkMain";

const HowItWork = () => {
  return (
    <div className="py-20">
      <HowItWorkMain />
      <ServiceHighlights />
      <ComparisonTable />
    </div>
  );
};

export default HowItWork;
