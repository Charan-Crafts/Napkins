import React from 'react';
import Blog from './Blog'; // ✅ assuming Blog.jsx is in same folder
import Eigth from '../components/Eigth';
import Seventh from '../components/Seventh'; // ✅ Add this line

const BlogPage = () => {
  return (
    <>
      <Blog />
      <Seventh />
      <Eigth />
    </>
  );
};

export default BlogPage;
