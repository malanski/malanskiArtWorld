import styled from 'styled-components'

export const IntroImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 16px;
  border-radius: 4px;
  /* -webkit-box-shadow: 0px 30px 60px 25px #f906ed;
  -moz-box-shadow: 0px 30px 60px 25px #f906ed;
  box-shadow: 0px 30px 120px 25px #f906ed; */
  /* background-image: radial-gradient(
    hsl(1, 10%, 10%, 10%) 15%,
    hsl(302, 100%, 40%, 80%)
  ); */
  /* background-size: contain; */
  /* margin: auto; */
  @media (max-width: 1440px) {
    /* width: 50%; */
    /* display: inline-table; */
  }
`
export const IntroImage = styled.img`
  top: 0;
  right: 0;
  width: 100%;

  height: auto;
  @media (max-width: 1440px) {
    width: 50%;
    margin: 0 auto;
    height: auto;
    /* display: inline-table; */
  }
`
