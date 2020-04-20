import React , {Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { actions as repositoryActions, selectors as repositorySelectors } from './data/repositoriesReducer';

class RepositoryList extends Component {

    state = {
      openUpdateBlacklistIdentificacao: false
    }

    componentDidMount() {
        this.handleGetAllRepositories();
    }

    handleGetAllRepositories = () => {
        const { getAllRepositories } = this.props;
        getAllRepositories();
    }

    render() {
        var {user}  = this.props;
        return(
            <div>
            <p>HELLO {user.userName}</p>
          </div>);
    }
}

const mapStateToProps = (state) => ({
    repositories: repositorySelectors.getRepositories(state)
  });
  
  const mapDispatchToProps = {
    ...repositoryActions,
  };
  
  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
  )(RepositoryList);