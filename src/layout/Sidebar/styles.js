import styled from 'styled-components';

export const Container = styled.div`
  background-color:rgba(75, 75, 75, 1);
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 250px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
    padding: 0px 0px 0px 40px; 

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 250px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 50px;
`;