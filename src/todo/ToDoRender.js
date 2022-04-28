import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  Button,
  Typography
} from "@mui/material";
import React, { useEffect } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./ToDoRender.css";

export const ToDoRender = (props) => {
  return <div>{JSON.stringify(props)}</div>;
};
