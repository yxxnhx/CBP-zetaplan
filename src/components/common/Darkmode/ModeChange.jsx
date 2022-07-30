import React from 'react';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import iconSun from '../../../img/icon/baseline_light_mode_black_24dp.png';
import iconMoon from '../../../img/icon/baseline_dark_mode_white_24dp.png';
import styled from 'styled-components';


const ModeChange = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='themeBtnArea' style={{
      display: 'flex',
      justifyContent : 'flex-end',
      position: 'relative',
    }}>
      <DarkBtn
        className='themeBtn'
        onClick={toggleTheme} >
        {theme === 'light' ?
          <Sun></Sun> :
          <Moon></Moon>}
        mode change
      </DarkBtn>
    </div>  
  );
};

const Sun = styled.div `
  background: url(${iconSun}) no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
  transform: translate(21rem, .2rem);
  @media all and (max-width: 475px) {
    width: 15px;
    height: 15px;
    transform: translate(17.6rem, .2rem);
  }
`
const Moon = styled.div `
  background: url(${iconMoon}) no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
  transform : translate(17.6rem, .2rem);

  @media all and (max-width: 475px) {
    width: 15px;
    height: 15px;
    transform: translate(17rem, .2rem);
  }
`

const DarkBtn = styled.button `
  background-color : transparent;
  border : 1px solid #1527a0;
  padding : 1.5% 5% 1.5% .5%;
  border-radius : 50px;
  color :#1527a0;
  font-family : 'Montserrat';
  font-size : 2.3rem ;
  margin-bottom : 3rem ;
  box-shadow : 0 .625rem 1.25rem rgba(18, 27, 116, 0.18);
  position : absolute ;
  top: 1.5rem ;
  right: 10rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top : 2rem;

  @media all and (max-width:475px){
    padding : 1.5% 7% 1.5% .5%;
    right: 5rem;
    font-size: 2rem;
  }
`



export default ModeChange;