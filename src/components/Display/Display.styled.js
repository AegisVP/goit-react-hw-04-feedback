import styled from 'styled-components';

export const StatRow = styled.p`
  ${p => p.backgroundColor && `background-color: ${p.backgroundColor}`};
  margin: 0;
  padding: ${p => p.theme.mp(2, 3)};
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  border: 1px solid #dddddd;
`;

export const Value = styled.span`
  font-weight: normal;
`;
