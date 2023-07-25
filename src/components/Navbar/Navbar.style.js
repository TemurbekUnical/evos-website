import styled from "styled-components";

export const StyledNavbar = styled.div`
  background-color: white;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    background-color: green;
    padding: 3px;
    width: fit-content;
    color: white;
    font-weight: 700;
    font-size: 35px;
    height: fit-content;
  }
  ul {
    text-transform: capitalize;
    list-style: none;
    display: flex;

    li {
      margin-right: 1rem;
      &.active {
        &::after {
          position: absolute;
          bottom: 0;
          height: 3px;
          background-color: green;
        }
      }
    }
  }
`;
