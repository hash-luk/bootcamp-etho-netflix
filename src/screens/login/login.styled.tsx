import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
  min-height: 100vh;
  background-color: #1a1a1a;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 0 0 22px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
`;

export const Button = styled.button`
  width: 100%;
  padding: 9px;
  margin: 0 0 22px;
  border-radius: 5px;
  background-color: #e31a13;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const Error = styled.p`
 color: #e31a13;
 font-weight: 800;
`;
