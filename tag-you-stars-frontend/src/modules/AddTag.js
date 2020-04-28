import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { compose } from 'redux';
import '../css/Card.css';
import { Paper, Typography, Chip, Avatar, Text, Fab, TextField, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import CardProject from '../common/CardProject';
import AppContainer from '../common/AppContainer';

class AddTag extends Component {

  render() {
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
            <Col xs={9}>
              <CardProject />
            </Col>
          </Row>
        </Grid>
      </AppContainer>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(AddTag);

