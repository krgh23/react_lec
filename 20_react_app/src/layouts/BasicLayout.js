import React from 'react';
import Header from '../components/Header';
import NaviBar from '../components/NaviBar';
import { Outlet } from 'react-router-dom';

const BasicLayout = () => {
  return (
    <div>
      <Header />
      <NaviBar />
      <Outlet />
    </div>
  );
};

export default BasicLayout;