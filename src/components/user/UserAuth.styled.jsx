import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


// export const Link = styled.NavLink`
// text-decoration: none;
// color: #000;
// `;

export const Link = styled(NavLink)({
  textDecoration: 'none',
  color: '#000',
  display: 'inline-block',
  margin: '0 5px',

  '&[aria-current="page"]': {
    fontWeight: 'bold',
  },
});