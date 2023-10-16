import React from 'react';
import styled from 'styled-components';

const Link = styled.nav`
display:inline-flex;
color: white;
text-decoration: none;
font-size: 16px;
margin: 10px;
`;

const Nav = styled.div`
  background-color: lightgreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:65px;
  padding:10px
`;

const Navbar = () => {
  return (
    <div>
    <Nav>
    <img src='/logo' alt='this is logo' />
    
    <nav>
      <Link>
      <a href="/skills">Skills</a>
      </Link>
      <Link>
      <a href="/education">Education</a>
      </Link>
      <Link>
      <a href="/projects">Project</a>
      </Link>
      <Link>
      <a href="/contact">Contact Me</a>
      </Link>
    
    </nav>
    </Nav>
    </div>
  );
};

export default Navbar;
