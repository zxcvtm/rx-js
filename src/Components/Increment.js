import React from 'react';
import { increment, incrementIfOdd } from '../Actions/increment-actions'
import { connect } from "react-redux";

function Increment(props) {
  return (
    <div>
      <h2>Contador</h2>
      <button onClick={ props.increment }>Incrementar</button>
      <button onClick={ props.incrementIfOdd }>Incrementar si es Impar</button>
      <div>
        <span>{props.counter}</span>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {counter: state.counter};
}
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    incrementIfOdd: () => dispatch(incrementIfOdd())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Increment);
