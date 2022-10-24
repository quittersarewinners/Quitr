import React from 'react';

function HealthBenefits(props) {
  return (
    <div className="healthBenefits">
      <p>{props.habit ? props.habit.quitLength.days : null} {props.fact ? props.fact.fact : null}</p>
    </div>
  );
}

export default HealthBenefits;
