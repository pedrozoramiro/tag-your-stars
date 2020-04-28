import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import '../css/Card.css';
import { Paper, Typography, Chip, Avatar,Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
  
const CardProject = () => (
    <Paper elevation={5} style={{padding: "30px", margin: "10px", height: "100%" }}>
              <Row>
                <Col xs={2} >
                  <Row center="xs" >
                    <Typography variant="caption" display="inline" gutterBottom>Autor</Typography>
                  </Row>
                  <Row center="xs" >
                    <Avatar alt="Cindy Baker" style={{ height: "130px", width: "130px" }}
                      src="https://avatars0.githubusercontent.com/u/1671359?v=4" />
                  </Row>
                  <Row center="xs">
                    <Typography style={{ margin: "10px" }} variant="caption" display="inline" gutterBottom>
                      RAMIRO PEDROZO
                   </Typography>
                  </Row>
                </Col>
                <Col xs={9}>
                  <a href="https://github.com/pedrozoramiro/tag-your-stars">
                    <Typography style={{ margin: "20px" }} gutterBottom variant="h5" component="h1">
                      https://github.com/pedrozoramiro/tag-your-stars
                   </Typography>
                  </a>
                  <Typography component="p" style={{ margin: "20px" }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                  <Chip variant="outlined" label="DOCKER" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="CI" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="JAVASCRIPT" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="JAVA" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="JEKINS" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="NODEJS" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="KAFKA" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="DOCKER" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="CI" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="JAVASCRIPT" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="JAVA" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="JEKINS" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="NODEJS" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="KAFKA" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="DOCKER" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="CI" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="JAVASCRIPT" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="JAVA" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="JEKINS" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="NODEJS" onDelete={() => console.log("delete")} color="primary" />
                  <Chip variant="outlined" label="KAFKA" onDelete={() => console.log("delete")} color="primary" />
                  </Col>
                <Col xs={1} >
                    <Fab variant="extended" color="primary" aria-label="add" >
                        <Add />
                         TAG
                    </Fab>
                </Col>
              </Row>
            </Paper>
);
  
export default CardProject