import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    font-family: 'Jacques Francois', serif;
    height: 5rem;
    background-color: #000;
    color: #ffffff;
    box-shadow: 1px 1px 3px 2px #808080;
    nav {
        display: flex;
        align-items: center;
        ul {
            display: flex;
            list-style: none;
            li {
                margin-right: 1.5rem;
                font-size: 1.5rem;
                font-weight: 700;
                img {
                    height: 50px;
                    border-radius: 50%;
                }
                a {
                    text-decoration: none;
                    color: inherit;
                }
                &:last-child:hover {
                    cursor: pointer;
                }
            }
        }
    }
`;


export const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    height: 5rem;
    justify-content: center;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  th, td {
        text-align: left;
        padding: 5px;
  }
  tr:nth-child(even) {
        background-color: #f2f2f2;
  }
  @media(min-width: 975px) {
        width: 60%;
        height: 50%;
    }
`;
