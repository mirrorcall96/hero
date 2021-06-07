import styled from "styled-components";
import {Card} from 'react-bootstrap';
export const StyledCard = styled(Card)`
    border: none;
    width: 10rem;
    &.villian {
        width: 5rem;
    }
    Img:hover{
        cursor: pointer;
    }
`;
