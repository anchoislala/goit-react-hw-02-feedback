import styled from '@emotion/styled';

export const List = styled.ul`
    padding: 0;
    list-style: none;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;

    &:not(:last-child) {
    margin-bottom: 7px;
    }
`;

export const Text = styled.p`
    display: block;
    margin: 0 10px;
    font-size: 30px;
`;