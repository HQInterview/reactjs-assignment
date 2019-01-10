import React from 'react';
// import {connect} from 'react-redux'
import Layout from '../components/layout';

class Search extends React.Component {


  render () {
    return (
      <Layout>
        <div className="form-inline">
          <input className="form-control mr-sm-2" 
            type="text" placeholder="Search" style={{width: '82%'}}
            onChange={e => this.setState({searchKey : e.target.value})} />
          <button className="btn btn-secondary my-2 my-sm-0" 
            onClick={() => this.setState({list : this.onClick(this.state.searchKey)})}>
            Search
          </button>
        </div>
        <h1>Search result</h1>
        {this.state.list[0]}
      </Layout>
    )
  }
}

export default Search;