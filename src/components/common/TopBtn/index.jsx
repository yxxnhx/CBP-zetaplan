import { useEffect, useState } from 'react';
import styled from 'styled-components';
import buttonImg from './../../../img/bg/top_button@2x.png'
import buttonImgB from './../../../img/bg/top_button_Blue@2x.png'

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
  background-image: url(${buttonImg});
  background-size: cover;
  width: 3rem;
  height: 3rem;
  position: fixed;
  right: 6rem;
  bottom: 4rem;
  &:hover {
    background-image: url(${buttonImgB});
    background-size: cover;
    width: 3rem;
    height: 3rem;
  }
`

