import React from 'react';
const Header = ({titulo}) =>(
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <a className="navbar-brand" href="#"><i className="fas fa-newspaper"></i>  {titulo}</a>

</nav>

)
export default Header;