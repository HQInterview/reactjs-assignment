import axios from 'axios';
import config from '../config';

export const getTopRepos= ()=>{
	let path = `${config.nytApiEndpoint}/svc/mostpopular/v2/viewed/1.json?api-key=${config.nytApiKey}`;
	return axios.get(path).then(res => {
	  return res.data.results;
	});
};

export const  getArticlesByName = ( searchText )=> {
    let path = `${config.nytApiEndpoint}/svc/search/v2/articlesearch.json?q=${searchText}&api-key=${config.nytApiKey}`;
    return axios.get(path).then(res => {
      return res.data.response.docs ? res.data.response.docs: [];
    })
};
