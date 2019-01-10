import { connect } from 'react-redux'
import Layout from '../components/layout'
import { search, typeKey } from '../store';

const SearchBar = ({search, typeKey, list, searchKey}) => (
  <Layout>
    <div className="form-inline">
      <input className="form-control mr-sm-2" 
        type="text" placeholder="Search" style={{width: '82%'}}
        onChange={e => typeKey({searchKey : e.target.value})} />
      <button className="btn btn-secondary my-2 my-sm-0" 
        onClick={() => search(searchKey)}>
        Search
      </button>
    </div>
    <h1>Search result</h1>
    { list[0] }
  </Layout>
)

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);