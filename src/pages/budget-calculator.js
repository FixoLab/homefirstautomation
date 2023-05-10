import React from "react";

const BudgetCalculator = () => {
  return (
    <div className="uk-section-default uk-section" style={{paddingTop: "140px !important"}}>
      <div className="uk-container">
        <div
          className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
          uk-grid=""
        >
          <div className="uk-width-1-1 uk-first-column">
            <div>
              <iframe
                title="budget calculator"
                src="https://htacertified.org/home-technology-installation-budget-tool/4844"
                style={{ height: "1000px", width: "100%" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
