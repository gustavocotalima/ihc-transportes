import styled from 'styled-components'
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';
import Dialog from '@material-ui/core/Dialog';

export const Container = styled.div`
    background: var(--card-background);
    max-width: 300px;
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    border-radius:1rem;

    h2 { 
        width: 100%;
        max-width: 200px;
        height: auto;
        margin: 1.5rem 0;
    }

    button {
        cursor: pointer;
        width: 100%;
        font-size: 1rem;
        color: var(--text-button);
        background: var(--orange);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 2.5rem;

        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.9);
        }
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const Close = styled(CloseIcon)`
    margin: 1rem;
    font-size: 2rem;
    cursor: pointer;
`

export const PlanModal = styled(Dialog)`
    div {
        padding: 1.25rem;
        align-items: center;
    }
    
    //max-width: 600px;
    .Close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.8);
        }
    }
`