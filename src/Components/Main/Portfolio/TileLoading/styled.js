import styled, { keyframes } from 'styled-components';
import { ReactComponent as Spinner } from '../../../../assets/images/spinner.svg';
import { device } from '../../../../assets/breakpoints';
const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 88px auto 140px;
  @media ${device.mobile} {
    margin: 50px auto 30px;
  }
`;
export const Caption = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.text.primary};
  @media ${device.mobile} {
    margin-bottom: 30px;
    font-size: 14px;
  }
`;

export const StyledSpinner = styled(Spinner)`
  animation: ${rotate} 3s linear infinite;
  color: ${({ theme }) => theme.color.secondary};
`;
