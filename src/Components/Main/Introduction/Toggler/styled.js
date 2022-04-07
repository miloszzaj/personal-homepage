import styled, { keyframes } from 'styled-components';
import { device } from '../../../../assets/breakpoints';

const flash = keyframes`
0% {
  background-color: ${({ theme }) => theme.background.secondary};
;

}
50% {
  background-color: ${({ theme }) => theme.background.primary};

;
  }
  75% {
    background-color: ${({ theme }) => theme.background.secondary};

  }
`;

export const Container = styled.div`
  animation: ${flash} 5s infinite;

  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
  text-align: center;
  margin-left: auto;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 12px;
  position: static;
  width: 99px;
  height: 16px;
  left: 0px;
  top: 5px;
  @media ${device.tablet} {
    position: relative;
    top: -700px;
  }
  @media ${device.mobile} {
    position: relative;
    top: -700px;
    left: 60vw;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  width: 75px;
  display: inline-block;
  text-align: left;
  top: 8px;
`;
export const Label = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #bbb;
  border-radius: 20px;
`;
export const Input = styled.input`
  display: none;
  &:checked + .label .inner {
    margin-left: 0;
  }
  &:checked + .label .switch {
    right: 0px;
  }
`;

export const Inner = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
  &:before {
    float: left;
    width: 50%;
    height: 36px;
    padding: 0;
    line-height: 36px;
    color: #fff;
    font-weight: bold;
    box-sizing: border-box;
    content: 'YES';
    padding-left: 10px;
    background-color: black;
  }
  &:after {
    float: left;
    width: 50%;
    height: 36px;
    padding: 0;
    line-height: 36px;
    color: #fff;
    font-weight: bold;
    box-sizing: border-box;
    content: 'NO';
    padding-right: 10px;
    background-color: #bbb;
    color: #fff;
    text-align: right;
  }
`;

export const Switch = styled.span`
  display: block;
  width: 24px;
  margin: 5px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  border: 0 solid #bbb;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
  animation: ${flash} 5s infinite;
`;
