import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 2rem auto;;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;   
    min-height: 400px;
    
    h1{
        padding: 2rem;
    }

    table {
        
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }  

    th {
        padding-top: 12px;
        padding-bottom: 12px;
        background-color: var(--orange);
        color: white;
    }
`