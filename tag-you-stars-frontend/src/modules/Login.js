import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import githubLogo from '../styles/github-logo.png'
import '../styles/App.css';
import { Grid, Row } from 'react-flexbox-grid';
import { Paper, Link, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AppContainer from '../common/AppContainer';

class Login extends Component {


  render() {
    return (
      <AppContainer>
        <Grid fluid>
          <Row xs={6} >
            <Paper center="xs" elevation={6} style={{ width: "500px" }} >
              <Row center="xs">
                <Link component={Button} href="http://localhost:8080/oauth2/authorize/github">
                  <Button variant="outlined" color="primary"
                    component={Link}
                    style={{ width: "350px", margin: "20px" }}
                    raised={'true'}
                    startIcon={<img src={githubLogo} alt="Github"
                    />}>
                    <Typography>LOGIN COM GITHUB</Typography> 
                  </Button>
                </Link>
              </Row>
            </Paper>
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
)(Login);







