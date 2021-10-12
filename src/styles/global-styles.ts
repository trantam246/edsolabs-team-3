import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 10px;
    background-color: #171a23;
  }
  body {
   font-family: 'Montserrat', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }
  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  body{
          ::-webkit-scrollbar{
        width: 5px;
        background-color: #45484F;
      }
      ::-webkit-scrollbar-thumb{
        background-color: #A2A3A7;
      }
  }
`;
