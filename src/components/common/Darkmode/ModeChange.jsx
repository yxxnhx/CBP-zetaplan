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
        {
          theme === 'light' ?
            <SunBtn>mode change</SunBtn> :
            <MoonBtn>mode change</MoonBtn>
        }
      </DarkBtn>
    </div>  
  );
};

const SunBtn = styled.div `
  width: 300px;
  height: 100px;
  background-color : transparent;
  color :#1527a0;
  font-family : 'Montserrat';
  font-size : 2.2rem ;
  position : absolute ;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &::after {
    content: '';
    background: url(${iconSun}) no-repeat ;
    background-size: contain;
    width: 30px;
    height: 30px;
    transform: translate(1rem);
  }
  @media (min-width: 769px) and (max-width: 1023px){
    width: 250px;
    height: 80px;
   
  }
  @media (min-width: 476px) and (max-width: 768px) {
    width: 170px;
    height: 60px;
    padding: 1.5% 25% 1.5% 3%;
    &::after{
      width: 20px;
      height: 20px;
    }
  }
  @media all and (max-width:475px){
    width: 150px;
    height: 50px;
    right: 5rem;
    left: 0;
    font-size: 2rem;
    justify-content: flex-start;
    align-items: center;
    margin-left: 2rem;
    padding: 0;
    &::after{
    width:18px ;
    height: 18px;
    transform: translate(1rem);
   }
  }

`
const MoonBtn = styled.div `
  width: 300px;
  height: 100px;
  background-color : transparent;
  border: 2px solid #359aff;
  border-radius: 50px;
  color : white;
  font-family : 'Montserrat';
  font-size : 2.2rem ;
  position : absolute ;
  left: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding : 1.5% .5% 1.5% 20%;
  cursor: pointer;

  &::after {
  content: '';
    background: url(${iconMoon}) no-repeat;
    background-size: contain;
    width: 30px;
    height: 30px;
    transform: translate(-19.5rem);
  }

  @media (min-width: 769px) and (max-width: 1023px){
    width: 250px;
    height: 80px;
    &::after{
      transform: translate(-170px);
    }
  }

  @media (min-width: 476px) and (max-width: 768px) {
    width: 170px;
    height: 60px;
    padding : 1.5% .5% 1.5% 30%;
    &::after{
      width: 20px;
      height: 20px;
      margin: -4%;
      transform: translate(-130px);
    }
  }

  @media all and (max-width: 475px) {
    width: 150px;
    height: 50px;
    right: 5rem;
    font-size: 2rem; 
    padding : 1.5% .5% 1.5% 5%;
    justify-content: flex-end;
   &::after{
    width:18px ;
    height: 18px;
    transform: translate(-115.5px);
    margin: -2%;
    } 
  }
`


const DarkBtn = styled.button `
  width: 300px;
  height: 100px;
  background-color : transparent;
  border : 2px solid #1527a0;
  padding : 1.5% 0 1.5% 0;
  border-radius : 50px;
  color :#1527a0;
  font-family : 'Montserrat';
  font-size : 2.2rem ;
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

  @media (min-width: 769px) and (max-width: 1023px){
    width: 250px;
    height: 80px;
  }

  @media (min-width: 476px) and (max-width: 768px) {
    width: 170px;
    height: 60px;
    padding : 1.5% .5% 1.5% 5%;   
    &::after{
      width: 20px;
      height: 20px;
      margin: -3%;
    }
  }

  @media all and (max-width:475px){
    width: 150px;
    height: 50px;
    right: 5rem;
    top: 1rem; 
  }
  `



export default ModeChange;