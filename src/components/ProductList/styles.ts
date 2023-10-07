import styled from 'styled-components'

export const ProductListStyle = styled.div`
  display: flex;
  /* flex-direction: column; */

  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 798px) {
    justify-content: center;
    gap: 16px;
  }
`

export const ProductCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid #362c3b;
  padding: 8px;
  width: 200px;
  margin-bottom: 32px;
  background: #19141c;

  p {
    color: #d44acb;
  }
  img {
    width: 150px;
    border-radius: 8px;
  }
  @media (max-width: 975px) {
    width: 170px;
  }
  @media (max-width: 798px) {
    width: 25%;
  }
  @media (max-width: 637px) {
    width: 35%;
    img {
      width: 110px;
    }
  }
  @media (max-width: 375px) {
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
  p {
    color: turquoise;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    height: 20px;
    border-radius: 8px;
    text-transform: uppercase;
    font-size: 14px;
    color: #fff;
    background: #0f1369;
  }
`
