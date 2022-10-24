import React from 'react';

function HealthBenefits(props) {
  return (
    <div className="healthBenefits">
      <p>{props.fact ? props.fact.fact : null}</p>
    </div>
  );
}

export default HealthBenefits;
