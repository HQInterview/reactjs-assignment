import React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'
import { search, typeKey } from '../store';
// import withReduxStore from '../lib/with-redux-store'
// import { Provider } from 'react-redux'

class Search extends React.Component {
  render () {
    return (
      <Layout>
        <div className="form-inline">
          <input className="form-control mr-sm-2" 
            type="text" placeholder="Search" style={{width: '82%'}}
            onChange={e => this.props.typeKey({searchKey : e.target.value})} />
          <button className="btn btn-secondary my-2 my-sm-0" 
            onClick={() => this.props.search(this.props.searchKey)}>
            Search
          </button>
        </div>
        <h1>Search result</h1>
        {this.state.list[0]}
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		...state
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    typeKey: (key) => {
      dispatch(typeKey(message))
    },
    search: (key) => {
      dispatch(search(message))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)