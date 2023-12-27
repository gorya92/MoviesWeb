import styled from 'styled-components';
import React from 'react';


export const Comments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding-bottom: 100px;
`

export const Comment = styled.div`
    min-height: 100px;
    display: flex;
    padding: 20px 20px;
    flex-direction: column;
    gap: 15px;
    background: ${props => props.theme.backgroundColor};
    position: relative;
    border: 1px solid ${props => props.theme.accentColor1}; /* Граница */
    border-radius: 10px; /* Скругление углов */
    overflow: hidden; /* Предотвращает протекание границы за пределы блока */
`

export const Text = styled.h4`
  color: white;
  padding: 0;
  margin: 0;
`
export const Name = styled.p`
  font-size: ${props=> props.theme.textSizeTextM};
  letter-spacing: 1px;
  font-weight: 600;
  color: ${props => props.theme.accentColor2};
  text-transform: capitalize;
  padding: 0;
  margin: 0;
`

export const User = styled.div`

    display: flex;
    gap: 10px;
    align-items: center;
`

export const MainImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: end;
  align-items: end;
  gap:15px;
`
export const Input = styled.textarea`
  min-height: 60px;
  max-width: -webkit-fill-available;
  min-width: -webkit-fill-available;
  max-height: 60px;
  font-size: ${props=> props.theme.textSizeTextM};
  letter-spacing: 1px;
  font-weight: 600;
  color: ${props => props.theme.textColor};
  padding: 20px;
  margin: 0;
  background: ${props => props.theme.backgroundColor};
`

export const ButtonText = styled.button`
  color: ${props => props.theme.accentColor2};
`

export const DeleteButton = styled.button`
  width: 40px;
  height: 40px;
  color: red;
  background: inherit;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  &:hover {
    text-decoration: underline;
  }
`

export const ButtonWithImage = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${props => props.theme.accentColor1};
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;

    &:hover {
        background-color: ${props => props.theme.accentColor2};
    }
`;

export const Image = styled.img`
    width: 20px; // Укажите нужные размеры изображения
    height: 20px;
`;




