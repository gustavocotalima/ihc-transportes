import styled from 'styled-components'
import { FaBars } from 'react-icons/fa';

export const Container = styled.header`
    background: var(--orange);
`

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        z-index: 1001;
        margin: 1rem;
        text-decoration:none;
        font-family: Roboto;
        font-size: 2rem;
        color: var(--text-gray); 
    }
`
export const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    a {
        font-family: Roboto;
        font-size: 1.1rem;
        color: var(--text-gray);
    }
    @media (max-width: 600px) {
        z-index:1000;
        background-color:  var(--orange);
        flex-flow: column nowrap;
        justify-content: unset;
        position: fixed;
        align-items: left;
        &.true {
            transform: translateX(0%);
        }
        &.false {
            transform: translateX(100%);
        }
        top: 0rem;
        right: 0;
        height: 100vh;
        width: 100vw;
        transition: transform 0.3s ease-in-out;
        padding-top: 6rem;
        a {
            font-size: 2rem;
        }
    }
`
export const Bars = styled(FaBars)`
  display: none;
  color: var(--text-gray);
  @media (max-width: 600px) {
    margin: 1rem;
    display: block;
    font-size: 2rem;
    cursor: pointer;
    z-index: 1001;
  }
`