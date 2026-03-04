// import React from "react";
// import PropTypes from "prop-types";

// const UserGreeting = (props) => {
//   const welcomeMessage = (
//     <h2 className="welcome-message">Welcome {props.username}</h2>
//   );

//   const loginPrompt = (
//     <h2 className="login-prompt">Please Login To continue</h2>
//   );
//   return props.isLoggedIn ? welcomeMessage : loginPrompt;
// };
// UserGreeting.PropTypes = {
//     isLoggedIn: PropTypes.bool,
//     username: PropTypes.string
// };
// UserGreeting.defaultProps = {
//     isLoggedIn: true,
//     username: 'Guest'
// }

// export default UserGreeting;

import React from "react";
import PropTypes from "prop-types";

const UserGreeting = ({ isLoggedIn = false, username = "Guest" }) => {

  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {username}</h2>
  );

  const loginPrompt = (
    <h2 className="login-prompt">Please Login To continue</h2>
  );

  return isLoggedIn ? welcomeMessage : loginPrompt;
};

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

export default UserGreeting;