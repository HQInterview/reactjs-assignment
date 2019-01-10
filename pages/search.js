import React from 'react'
import { connect } from 'react-redux'
import Searchbar from '../components/searchbar';

class Search extends React.Component {

  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    return {}
  }

  render () {
    return (
      <Searchbar />
    )
  }
}

export default connect()(Search)