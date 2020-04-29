import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import '../css/Card.css';
import { Paper, Typography, Chip, Avatar, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import If from '../utils/If';

const CardProject = ({ project, history, deleteTag }) => (
  <Paper elevation={5} style={{ padding: "30px", margin: "10px", height: "100%" }}>
    <Row>
      <Col xs={2} >
        <Row center="xs" >
          <Typography variant="caption" display="inline" gutterBottom>Autor</Typography>
        </Row>
        <Row center="xs" >
          <Avatar alt="Cindy Baker" style={{ height: "130px", width: "130px" }}
            src={project.ownerAvatarUrl} />
        </Row>
        <Row center="xs">
          <Typography style={{ margin: "10px" }} variant="caption" display="inline" gutterBottom>
            {project.ownerLogin}
          </Typography>
        </Row>
      </Col>
      <Col xs={9}>
        <a href={project.url}>
          <Typography style={{ margin: "20px" }} gutterBottom variant="h5" component="h1">
            {project.url}
          </Typography>
        </a>
        <Typography component="p" style={{ margin: "20px" }}>
          {project.description}
        </Typography>
        {project.tags && project.tags.map(tag => 
            (<Chip key={tag} variant="outlined" label={tag} onDelete={() => deleteTag(project,tag)} color="primary" />))}
      </Col>
      <If test={history} >
        <Col xs={1} >
          <Fab variant="extended" onClick={() => history.push(`/project/${project.id}/addtag`)} color="primary" aria-label="add" >
            <Add />
            TAG
          </Fab>
        </Col>
      </If>

    </Row>
  </Paper>
);

export default CardProject