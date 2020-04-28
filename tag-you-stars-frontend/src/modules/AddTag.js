import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { compose } from 'redux';
import '../css/Card.css';
import { Paper, Typography, Chip, Avatar, Text, Fab, TextField, Button } from '@material-ui/core';
import CardProject from '../common/CardProject';
import AppContainer from '../common/AppContainer';
import { actions as projectActions, selectors as projectSelectors } from './data/projectsReducer';

class AddTag extends Component {


  render() {
    var {project} = this.props;
    console.log(project);
    return (
      <AppContainer>
        <Grid fluid>
          <Row>
            <Col xs={3} >
              <Paper elevation={5} style={{padding: "30px", margin: "10px", height: "100%" }} >
                <Row>
                  <TextField label="Adicionar Tag" variant="outlined" color="secondary" style={{ width: "100%" }} />
                </Row>
                <Row>
                  <Button variant="outlined" color="primary" style={{ width: "100%" }} > Salvar </Button>
                </Row>
              </Paper>
            </Col>
            {!project ?? 
              <Col xs={9}>
                <CardProject project={project}/>
              </Col>
            }
          </Row>
        </Grid>
      </AppContainer>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  console.log(state);
  console.log(ownProps);
  return  ({
  project: projectSelectors.getProjectById(state,ownProps.match.params.project_id),
})};

const mapDispatchToProps = {
...projectActions,
};

export default compose(
connect(mapStateToProps, mapDispatchToProps),
)(AddTag);
