import styled from "styled-components"

export const NavbarStyled = styled.div`
  #nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #648381;
    border-bottom: 1px solid #363636;
    padding: 0.1em 1em;
  }

  #search-form {
    position: relative;
    width: 20%;
  }

  #search-form svg {
    position: absolute;
    top: 10px;
    left: 9px;
  }

  #search-form input {
    padding-left: 2.5em;
    border: none;
    border-radius: 5px;
    width: 100%;
    margin: 0;
  }

  #nav-links {
    display: flex;
    align-items: center;
  }

  #nav-links li {
    margin-right: 1em;
  }

  #nav-links span {
    cursor: pointer;
  }

  #nav-links svg {
    font-size: 1.5em;
  }
`