import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'
import Router from 'next/router'
import Loader from '../src/components/Loader/Loading'

import { getTopRepos, getArticlesBySearch, setArticleDetails } from '../src/actions';
import Article from '../src/components/Article'

import { 
	SearchWrapper,
	SearchBody,
	SearchButton,
	TextField
} from './Style';

class SearchRepoContainer extends Component {
  static async getInitialProps ({ store, query }) {
    await store.dispatch(getTopRepos())
  }

  state = {
    searchText: ''
  }

  componentDidMount () {
    const { onInitMostPopular } = this.props
    onInitMostPopular()
  }

  handleChange = (e) => {
    this.setState({ searchText: e.target.value })
  }

  handleSearch =(searchText) => {
    let { onInitSearch } = this.props
    if (searchText !== '') {
      onInitSearch(searchText)
    }
  }

  handleArticleDetails = async (articleData) => {
    const { initArticleDetails } = this.props
    await initArticleDetails(articleData)
    localStorage.setItem('article', JSON.stringify(articleData))
    Router.push('/articleDetails')
  }

  render () {
    const { article, isLoading } = this.props;
    const { searchText } = this.state;
    let results = isLoading === false  && article && article.result ?
      Object.keys(article.result).map((key) => {
      return (
        <Article
          data={article.result[key]}
          handleArticleDetails={this.handleArticleDetails}
          searchText={searchText}
          key={key}
          {...article.result[key]}
        />
      )
      }) : <Loader/>;

    return (
      <Fragment>
        <SearchWrapper>
          <TextField
            type='text'
            name='search'
            onChange={(e) => this.handleChange(e)}
            value={searchText}
            placeholder="Search Articles..."
          />
          <SearchButton
            onClick={() => this.handleSearch(searchText)}
          >
          Search
          </SearchButton>
        </SearchWrapper>
        <SearchBody>{results}</SearchBody>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    article: state,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitMostPopular: () => dispatch(getTopRepos()),
    onInitSearch: (searchText) => dispatch(getArticlesBySearch(searchText)),
    initArticleDetails: (articleDetails) => dispatch(setArticleDetails(articleDetails))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchRepoContainer)
