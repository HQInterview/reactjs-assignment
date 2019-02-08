import * as actions from '../utils/nyt';

export const GET_TOP_REPOS = 'GET_TOP_REPOS';
export const GET_TOP_REPOS_SUCCESS = 'GET_TOP_REPOS_SUCCESS';
export const GET_ARTICLE_DETAILS = 'GET_ARTICLE_DETAILS';

export function getTopRepos () {
  return dispatch => {
    dispatch({
      type: GET_TOP_REPOS
    })

    return actions.getTopRepos().then(res => {
      dispatch(onGetTopRepo(res))
    })
  }
}

export const getArticlesBySearch = ( searchText )=> {
  return dispatch => {
    dispatch({
      type: GET_TOP_REPOS
    });
    return actions.getArticlesByName( searchText ).then(res => {
      dispatch(getArticlesBySearchSuccess(searchText, res))
    })
  }
}

export const onGetTopRepo = (searchResults)=> {
  return {
    type: GET_TOP_REPOS_SUCCESS,
    searchText:'',
    searchResults
  }
}

export const getArticlesBySearchSuccess = (searchText, searchResults)=> {
  return {
    type: GET_TOP_REPOS_SUCCESS,
    searchText,
    searchResults
  }
};

export const setArticleDetails = ( articleDetails )=> {
  return {
    type: GET_ARTICLE_DETAILS,
    articleDetails: articleDetails,
  }
};
