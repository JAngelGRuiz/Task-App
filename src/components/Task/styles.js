import styled from '@emotion/styled';

export const TaskContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
    display: ${(props) => props.isDone && props.hide ? 'none' : 'flex'};
    transition: 0.3s all ease;
`;

export const List = styled.li`
    list-style: none;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    background-color: ${(props) => props.isEditing ? 'rgba(0,0,0,0.1)' : null};
    transition: .3s all ease;
    border-radius: 12px;
`;

export const WrapperTask = styled.div`
    width: 100%;
    min-height: 70px;
    padding: 15px 30px;
    display: flex;
    align-items: center;
    list-style: none;
    display: block;
    text-decoration: ${(props) => props.isDone ? 'line-through' : 'none'} ;
`;

export const EditingPart = styled.div`
    max-height: ${(props) => props.isEditing ? '300px' : '0px'};
    list-style: none;
    overflow: hidden;
    transition: .3s all ease;
`;

export const Check = styled.input`

`;

export const TodoTask = styled.span`
    font-size: 20px;
    padding: 0px 12px;
`;