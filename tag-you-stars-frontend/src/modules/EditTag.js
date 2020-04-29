import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { compose } from 'redux';
import '../css/Card.css';
import { Paper, TextField, Button } from '@material-ui/core';
import CardProject from '../common/CardProject';
import AppContainer from '../common/AppContainer';
import { actions as projectActions, selectors as projectSelectors } from './data/projectsReducer';
import If from '../utils/If';

class EditTag extends Component {

  
  state = { newTag: "", error: "", label:"Adicionar Tag" }

  handleValueChange = event => {
    const value = event.target.value.toUpperCase();
    if(this.validation(value)){
      this.setState({ "newTag": value, error: "Tag já existe", label:"Erro ao digitar nova tag" });
      return;
   }
   this.setState({  "newTag": value, error: "", label:"Adicionar Tag"} );
  };

  validation(tag){
    var { project } = this.props;
    const tags = project.tags ?? [];
    return tags.indexOf(tag) !== -1;
  };

  handleAddTag = event => {
    var { project, postNewTag } = this.props;
    var { newTag } = this.state;
    postNewTag({ projectId: project.id, tag: newTag });
    this.setState({  "newTag": ""});
  };

  removeTag = (project, tag) => {
    var {deleteTag } = this.props;
    deleteTag({ projectId: project.id, tag });
  };

  render() {
    var { project } = this.props;
    var { error,label,newTag } = this.state;
    return (
      <AppContainer>
        <Grid fluid>
          <Row>
            <Col xs={3} >
              <Paper elevation={5} style={{ padding: "30px", margin: "10px", height: "100%" }} >
                <Row>
                  <TextField
                    error={!!error}
                    helperText={error}
                    value={newTag}
                    label={label}
                    variant="outlined"
                    color="secondary"
                    style={{ width: "100%" }}
                    onChange={this.handleValueChange}
                  />
                </Row>
                <Row>
                  <Button disabled={!!error} onClick={this.handleAddTag} variant="outlined" color="primary" style={{ width: "100%" }}> Salvar</Button>
                </Row>
              </Paper>
            </Col>
            <If test={project}>
              <Col xs={9}>
                <CardProject project={project} deleteTag={this.removeTag} />
              </Col>
            </If>
          </Row>
        </Grid>
      </AppContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    project: projectSelectors.getProjectById(state, ownProps.match.params.project_id),
  })
};

const mapDispatchToProps = {
  ...projectActions,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(EditTag);
