import { prependOnceListener } from "cluster";


const SearchBar = (props) => (
  <div className="form-inline">
    <input className="form-control mr-sm-2" 
      type="text" placeholder="Search" style={{width: '82%'}} />
    <button className="btn btn-secondary my-2 my-sm-0" 
      onClick={e => props.onClick()}>
      Search
    </button>
  </div>
)

export default SearchBar;