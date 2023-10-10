import styled from 'styled-components'

export const HeaderStyle = styled.header`
  background: #0000;
  padding: 32px 0;
  width: 100%;

  h1 {
    text-align: center;
    font-size: 25px;
    margin-bottom: 32px;
  }
  h1 a {
    color: white;
    /* width: 100%; */
    padding: 8px 16px;
  }
`
export const NavStyle = styled.nav`
  /* width: 1440px;
  padding: 2rem; */
  margin: 0 auto;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }
  a {
    text-align: center;
    color: white;
    width: 40%;
    border: 1px solid white;
    text-transform: uppercase;
    /* display: flex; */
  }
  @media (max-width: 1440px) {
    width: 100%;
  }
`
