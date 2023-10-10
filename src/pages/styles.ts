import styled from 'styled-components'

export const PageStyle = styled.div`
  /* display: flex;
  place-items: center; */
  position: relative;
  /* padding: 8px 2rem;
  max-width: 1440px; */
  margin: 0 auto;
  text-align: center;

  h5 {
    text-align: left;
    text-transform: uppercase;
  }
  @media (max-width: 840px) {
    padding: 0.8rem;
  }
  @media (max-width: 675px) {
    padding: 0.5rem;
  }
  @media (max-width: 475px) {
    padding: 0.01rem;
  }
`

export const ProductListStyle = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: space-between;

  /* padding: 8px; */
  /* width: 99%; */
  margin: auto;
  border-radius: 4px;
  @media (max-width: 798px) {
    justify-content: center;
    gap: 16px;
  }
`
