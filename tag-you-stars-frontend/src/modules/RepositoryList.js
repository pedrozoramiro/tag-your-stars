import React , {Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { actions as projectActions, selectors as projectSelectors } from './data/projectsReducer';
import { actions as userActions, selectors as userSelectors } from './data/userReducer';

import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '../widgets/Card'
import Paper from '@material-ui/core/Paper';

class RepositoryList extends Component {

    state = {
      openUpdateBlacklistIdentificacao: false
    }

    componentDidMount() {
        this.props.getAllProjects();
        this.props.getUserLogged();
    }



    render() {
        var {currentUser}  = this.props;
      console.log(this.props.projects);
        return(
          <Grid fluid>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid>
          );
    }
}

const mapStateToProps = (state) => { 
  console.log(state);
  return ({
    projects: projectSelectors.getProjects(state),
    currentUser: userSelectors.getUser(state),
  })};
  
  const mapDispatchToProps = {
    ...projectActions,
    ...userActions,
  };
  
  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
  )(RepositoryList);