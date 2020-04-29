import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { actions as projectActions, selectors as projectSelectors } from './data/projectsReducer';
import { actions as userActions, selectors as userSelectors } from './data/userReducer';

import { Grid, Row, Col } from 'react-flexbox-grid';
import CardProject from '../common/CardProject';
import AppContainer from '../common/AppContainer';
import { Paper, TextField, Button } from '@material-ui/core';
import If from '../utils/If';

class RepositoryList extends Component {

  state = {
    filter: ""
  }

  
  componentDidMount() {
    this.props.getAllProjects();
  }


  handleValueChange = event => {
    const value = event.target.value.toUpperCase();
    this.setState({"filter": value});
  };
  
  loadProjects = event => {
    const {filter} = this.state;
    this.props.getAllProjects(filter)
  };

  removeTag = (project, tag) => {
    var {deleteTag } = this.props;
    deleteTag({ projectId: project.id, tag });
  };

  handleKeyDown = (event) => {
   if (event.key === 'Enter') {
      this.loadProjects();
    }
  };

  render() {
    var {projects } = this.props;
    var {filter } = this.state;
    return (
      <AppContainer>
        <Paper elevation={5} style={{ padding: "30px", margin: "10px", height: "100%" }} >
          <Row>
            <TextField value={filter} 
            onKeyDown={this.handleKeyDown}
            onChange={this.handleValueChange} 
            variant="outlined" 
            style={{ width: "100%" }}
            />
          </Row>
          <Row>
            <Button onClick={this.loadProjects} variant="outlined" color="primary" style={{ width: "100%" }}> Buscar </Button>
          </Row>
        </Paper>
        <Grid fluid>
          <If test={projects}>
            {projects.map(project => {
              return (
                <CardProject
                  key={project.id}
                  project={project}
                  deleteTag={this.removeTag}
                  history={this.props.history}
                />
              );
            })}
          </If>
        </Grid>
      </AppContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: projectSelectors.getProjects(state),
  currentUser: userSelectors.getUser(state),
});

const mapDispatchToProps = {
  ...projectActions,
  ...userActions,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(RepositoryList);