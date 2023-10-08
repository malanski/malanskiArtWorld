import styled from 'styled-components'

export const ProductsListPagination = styled.div`
  max-width: 1440px;
  margin: 0;
  padding: 2rem 0;
  h5 {
    text-align: left;
    text-transform: uppercase;
  }
  div {
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: start;
    /* width: 50px; */
    margin: 0;
    gap: 16px;
  }
  span {
    &:hover {
    }
  }
  a {
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    text-align: center;
    border: 1px solid white;
    border-radius: 8px;
    width: 50px;
    display: block;
  }
`
export const CategoryNavigation = styled.div`
  display: flex;
  max-width: 1440px;

  a {
    display: flex;

    width: 250px;
  }
`
