import React from 'react';
import "../layout/Main.scss"

function Main(props) {
  const { children } = props;


  return <div className='main'>{children}</div>;
}

export default Main;