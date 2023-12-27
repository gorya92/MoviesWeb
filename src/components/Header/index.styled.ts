import styled from 'styled-components';

export const Header = styled.header`
    display: flex; 
    width: 100%;
    min-height: 180px;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.backgroundColor};
    top: 0;
    position: sticky;
    overflow: hidden;
    z-index: 50;
    @media (max-width: 768px) and (min-width: 576px)  { 
        min-height: 100px;
    }
    @media (max-width: 576px)  {
        min-height: 50px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center; 
    width: 100%;
    height: 100%;
    padding: 0px 0px;
    background-color: ${props => props.theme.backgroundColor};
    box-sizing: border-box;

    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  {     
        width: 100%;
    }
    @media (max-width: 576px)  {   
        width: 100%;
    }
`;

export const Logo = styled.a`
    display: flex;
    align-items: center;
    gap: 20px;
    // margin-right: 90px;
    @media (max-width: 768px) and (min-width: 576px)  {
        width: 40%;
        gap: 10px;
    }
    @media (max-width: 576px)  {
        width: 40%;
        gap: 10px;
    }
`;
export const LogoTitle = styled.p`
    color: ${props => props.theme.accentColor1};
    font-family: Luckiest Guy;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 32px */
    overflow-wrap: break-world;
    max-width: 100px;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: 18px;
    }
    @media (max-width: 576px)  {
        font-size: 18px;
    }
`;

export const Buttons = styled.div`
  display: flex;

  & > * {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-color: ${props => props.theme.accentColor1};
        border: none;
    margin-right: 10px;
    padding: 0;
    border-radius: 50%; /* Сделать кнопку круглой */
    
    &:hover {
      opacity: 0.8;
    }
  }
`;


