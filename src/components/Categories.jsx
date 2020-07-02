import React from 'react';
import '../assets/components/Categories.scss';

<<<<<<< HEAD
const Categories = ({ children, title }) => (
=======
const Categories = ({ children }) => (
>>>>>>> b0d9c0135e28e9931ebd1a252e5ecfffd14cadbf
  <div className='categories'>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>
);

export default Categories;
