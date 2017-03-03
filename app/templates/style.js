import styled from 'styled-components';

const <%= nameComponentStyle %> = styled.div`
    width: 100%;
    height: 100%;
    background: ${({follow}) => follow ? 'none' : '#1d1d1d'};
`;

export { <%= nameComponentStyle %> };