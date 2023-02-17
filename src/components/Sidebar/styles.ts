import styled from "styled-components";

export const Container = styled.aside`
background-color: ${(props) => props.theme.colors.red};

  width: 7.75em;
  padding: 2rem 0;
  
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`
