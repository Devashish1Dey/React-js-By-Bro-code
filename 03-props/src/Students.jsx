import React from 'react'
// import PropTypes from "prop-types";
import PropTypes from 'prop-types';

const Students = (props) => {
  return (
    <div className='student'>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

// note: component is `Students`, ensure propTypes reference matches
Students.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
Students.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Students
