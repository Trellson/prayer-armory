import React from 'react';
import './header.scss';


class Header extends React.Component{
    render(){
    return (
      <header className="header">
          <div className="header__wrapper">
            <div className="header__title">
                <h1 className="header__title--text"> The Prayer Armory</h1>
            </div>
            <div className="header-nav">

            </div>
          </div>
      </header>
    );
    }
  }
  
  export default Header;