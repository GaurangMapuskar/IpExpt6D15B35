import React from 'react';
import styled from "styled-components";

const Foot = styled.footer`
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  height:60px;
`;

const Footer = (props) => {
  return (
    <Foot>
      Copyright &copy; {props.name}<br></br>
      Number : {props.number}
    </Foot>
  );
};

export default Footer;
