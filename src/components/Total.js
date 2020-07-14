import React from "react";
import { connect } from "react-redux";

// This component needs the car object and the additionalPrice property from state
const Total = (props) => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.carPrice + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carPrice: state.car.price,
    additionalPrice: state.additionalPrice,
  };
};

export default connect(mapStateToProps, {})(Total);
