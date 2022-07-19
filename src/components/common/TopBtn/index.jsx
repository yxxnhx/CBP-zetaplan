import { useEffect, useState } from 'react';
import styled from 'styled-components';
import buttonImgB from './../../../img/bg/top_button_blue@2x.png'
import buttonImgW from './../../../img/bg/top_button_white@2x.png'

export default function TopButton() {

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })

  }
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 100) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    console.log(window.scrollY)
    window.addEventListener('scroll', handleShowButton)
    return () => {
      window.removeEventListener('scroll', handleShowButton)
    }
  }, [])

  return showButton && (
    <ScrollContainer>
      <TopBtn id='top' onClick={scrollToTop} type='button' ></TopBtn>
    </ScrollContainer>

  )

}

const ScrollContainer = styled.div `
  width: 10rem;
  height: auto;
  position: relative;
`
const TopBtn = styled.button `
  background-image: url(${buttonImgW});
  background-repeat: no-repeat;
  background-size: contain;
  width: 7rem;
  height: 7rem;
  position: fixed;
  right: 4rem;
  bottom: 2rem;
  &:hover {
    background-image: url(${buttonImgB});
    background-size: cover;
    width: 7rem;
    height: 7rem;

  }
`

