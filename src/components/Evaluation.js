import React from 'react';

class Evaluation extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="evaluation-1">
          1
          <input id="evaluation-1" type="radio" name="evaluation" value="1" />
        </label>
        <label htmlFor="evaluation-2">
          2
          <input id="evaluation-2" type="radio" name="evaluation" value="2" />
        </label>
        <label htmlFor="evaluation-3">
          3
          <input id="evaluation-3" type="radio" name="evaluation" value="3" />
        </label>
        <label htmlFor="evaluation-4">
          4
          <input id="evaluation-4" type="radio" name="evaluation" value="4" />
        </label>
        <label htmlFor="evaluation-5">
          5
          <input id="evaluation-5" type="radio" name="evaluation" value="5" />
        </label>
      </div>
    );
  }
}

export default Evaluation;
