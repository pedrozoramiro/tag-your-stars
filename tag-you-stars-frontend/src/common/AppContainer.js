import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import '../css/Card.css';
import { Paper, Typography, Chip, Avatar } from '@material-ui/core';
  
  
const AppContainer = (props) => (
    <div className="App">
    <div className="App-header">
      <Typography style={{ margin: "20px" }} gutterBottom variant="h4" component="h1">TAG YOU STAR</Typography>
      <Typography style={{ margin: "20px" }} gutterBottom variant="subtitle1" component="h1">Permite adicionar uma tag a um repositório do github para que ele possa ser encontrado facilmente.</Typography>
    </div>
    {props.children}
  </div>
);
  
export default AppContainer;