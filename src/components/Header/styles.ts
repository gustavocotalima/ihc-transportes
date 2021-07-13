import styled from 'styled-components'

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

    div { 
        display: flex;
        justify-content: space-between;
    }
    a {
        text-decoration:none;
        margin: 1rem;
        h1 {
            font-family: Roboto;
            font-size: 2rem;
            color: var(--text-gray);
        }
        h2 {
            font-family: Roboto;
            font-size: 1.1rem;
            color: var(--text-gray);
        }
    }
    
`