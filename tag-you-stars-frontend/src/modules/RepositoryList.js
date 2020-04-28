import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { actions as projectActions, selectors as projectSelectors } from './data/projectsReducer';
import { actions as userActions, selectors as userSelectors } from './data/userReducer';

import { Grid, Row, Col } from 'react-flexbox-grid';
import CardProject from '../common/CardProject';
import AppContainer from '../common/AppContainer';
import { Paper, TextField, Button } from '@material-ui/core';

class RepositoryList extends Component {

  state = {
    openUpdateBlacklistIdentificacao: false
  }

  componentDidMount() {
    this.props.getAllProjects();
  }

  render() {
    var { currentUser } = this.props;
 
    console.log(this.props.projects);
    return (
      <AppContainer>
          <Paper elevation={5} style={{padding: "30px", margin: "10px", height: "100%" }} >
                <Row>
                  <TextField variant="outlined" style={{ width: "100%" }} />
                </Row>
                <Row>
                  <Button variant="outlined" color="primary" style={{ width: "100%" }}> Buscar </Button>
                </Row>
              </Paper>
        <Grid fluid>
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </Grid>
      </AppContainer>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    projects: projectSelectors.getProjects(state),
    currentUser: userSelectors.getUser(state),
  })
};

const mapDispatchToProps = {
  ...projectActions,
  ...userActions,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(RepositoryList);