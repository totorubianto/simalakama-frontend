import React from 'react';

interface Props {
  Navbar: any;
  Child: any;
}

function Wraper({ Navbar, Child }: Props) {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Child />
      </div>
    </div>
  );
}

export default Wraper;