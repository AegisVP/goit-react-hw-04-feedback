import styled from 'styled-components';

export const FbButton = styled.button`
  cursor: pointer;
  width: ${p=>p.theme.widths.oneWidth-10}px;
  border: none;
  outline: none;
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.mp(2, 1)};
  ${p => p.backgroundColor && `background-color: ${p.backgroundColor}`};

  font-weight: bold;
  :active {
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
