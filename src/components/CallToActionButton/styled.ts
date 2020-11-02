import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// const sharedStyling = css`
//   disabled: ${({ disabled }) => disabled};
//   display: flex;
//   width: ${(props) => (props.width ? props.width : 'auto')};
//   height: ${(props) => (props.height ? props.height : 'auto')};
//   line-height: 24px;
//   padding: 10px 27px;
//   font-size: 18px;
//   font-weight: bold;
//   color: ${({ inverted, theme }) =>
//     inverted ? `${theme.colours.orange}` : 'white'};
//   text-transform: uppercase;
//   font-family: ${({ theme }) => theme.fonts.main};
//   justify-content: center;
//   align-items: center;
//   border-radius: 5px;
//   border: ${({ inverted, theme }) =>
//     inverted ? `2px solid ${theme.colours.orange}` : 'none'};
//   background-color: ${({ inverted, theme, isDestructiveAction }) => {
//     if (inverted) {
//       return 'transparent';
//     }
//     if (isDestructiveAction) {
//       return theme.colours.errorRed;
//     }
//     return theme.colours.orange;
//   }};
//   outline: none;
//   cursor: pointer;
//   width: ${(props) =>
//     props.inverted
//       ? `1px solid ${({ theme }) => theme.colours.orange}`
//       : 'none'};
//   :hover {
//     background-color: ${({ inverted, theme, isDestructiveAction }) => {
//     if (inverted) {
//       return 'transparent';
//     }
//     if (isDestructiveAction) {
//       return theme.colours.darkErrorRed;
//     }
//     return theme.colours.darkOrange;
//   }};
//     color: ${({ inverted, theme }) =>
//     inverted ? `${theme.colours.darkOrange}` : `${theme.colours.white}`};
//     border-color: ${({ inverted, theme }) =>
//     inverted ? `${theme.colours.darkOrange}` : 'none'};
//   }
//   :disabled {
//     color: ${({ theme }) => theme.colours.mediumGrey};
//     border: ${({ inverted, theme }) =>
//     inverted ? `2px solid ${theme.colours.disabled}` : 'none'};
//     background-color: ${({ theme }) => theme.colours.disabled};
//     border: ${({ theme }) => theme.colours.disabled};
//     cursor: not-allowed;
//   }
//   & > svg {
//     margin-right: 8px;
//   }
// `;

export const PrimaryStyle = styled.button`
  ${sharedStyling}
`;

export const PrimaryLinkStyle = styled(Link)`
  ${sharedStyling}
  text-decoration: none;
`;
