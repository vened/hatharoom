import React from 'react';
import logo from './logo.svg';
import './sidebarHeader.less';

function SidebarHeader() {
  return (
    <div className="SidebarHeader">
      <div className="Logo">
        <img src={logo} className="Logo-img" alt="logo" />
        <div className="Logo-slogan">
          React Admin
        </div>
      </div>
    </div>
  );
}

export default SidebarHeader;
