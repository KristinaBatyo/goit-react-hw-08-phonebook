import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 20px;
  padding: 20px;

  border: 1px solid;
`;

export const Mail = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0px 0px 15px;
`;