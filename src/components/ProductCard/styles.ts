import styled from 'styled-components'

export const ProductCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid #362c3b;
  padding: 8px;
  width: calc(25% - 8px);
  margin-bottom: 32px;
  background: #19141c;

  p {
    color: #d44acb;
  }
  img {
    width: 150px;
    border-radius: 4px;
  }
  @media (max-width: 975px) {
    width: 170px;
  }
  @media (max-width: 798px) {
    width: 25%;
    img {
      width: 90px;
    }
  }
  @media (max-width: 637px) {
    width: 35%;
    img {
      width: 110px;
    }
  }
  @media (max-width: 475px) {
    width: 80%;
    margin: 16px auto;
    img {
      width: 190px;
    }
  }
`
export const ProductCardAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`

export const ProductCardButton = styled.div`
  display: flex;
  place-items: center;
  padding: 8px;
  height: 20px;
  border-radius: 16px;
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  background: #f906ed;
`

export const Modal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  color: white;
`
export const ModalContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 32px;
  img {
    /* min-width: 250px; */
    width: 25vw;
  }
  @media (max-width: 900px) {
    img {
      width: 30vw;
    }
  }
  @media (max-width: 720px) {
    padding: 0 16px;
  }
  @media (max-width: 600px) {
    img {
      width: 60vw;
    }
  }
  @media (max-width: 393px) {
    padding: 0 8px;
    img {
      width: 70vw;
    }
  }
`
export const ModalInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  div {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 585px) {
    gap: 4px;

    flex-direction: column;
  }
`
export const ModalButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;

  @media (max-width: 585px) {
    gap: 4px;
  }
`
export const ProductModalAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 50%;
  border: 1px solid white;
  border-radius: 8px;
  flex-grow: 1;
  height: 100%;
  @media (max-width: 585px) {
    width: 100%;
  }
`
export const ModalDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  border: 1px solid white;
  padding: 8px;
  border-radius: 8px;
  margin: 8px 0;
  text-align: justify;

  @media (max-width: 630px) {
    font-size: 14px;
  }
  @media (max-width: 585px) {
    width: 100%;
    font-size: 13px;
  }
`
export const ModalOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 90%;
  padding: 16px 0;
  span {
    color: greenyellow;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid white;
    margin: 4px;
    text-transform: uppercase;
  }
  @media (max-width: 630px) {
    font-size: 14px;
    padding: 8px 0;
    span {
      padding: 4px 0;
      border: none;

    }
  }
`
export const ProductCardPrice = styled.div`
  span {
    font-size: 20px;
    color: turquoise;
  }
`
