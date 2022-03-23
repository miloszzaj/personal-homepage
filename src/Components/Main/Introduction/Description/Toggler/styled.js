import styled from 'styled-components';

export const Container = styled.div`
  text-transform: uppercase;
  text-align: center;
  margin-left: auto;
`;
export const Wrapper = styled.div`
  position: relative;
  width: 75px;
  display: inline-block;
  text-align: left;
  top: 8px;
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

export const Label = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #bbb;
  border-radius: 20px;
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
`;
