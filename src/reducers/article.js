import * as ActionType from '../actions'

const initialState = {
  isLoading: true,
  articleDetailsLoading: true,
  lang: '',
  result: [],
  articleDetails: []
};

export const getArticleSuccess = (state, action) =>{
  const data = { result : action.searchResults , isLoading: false, lang: action.searchText};
  return ({...state, ...data });
};

export const getArticleStart = (state, action) =>{
  const data = { isLoading : true };
  return ({...state, ...data });
};

export const setArticleDetails = (state, action) =>{
  const data = { articleDetails : action.articleDetails , articleDetailsLoading: false};
  return ({...state, ...data });
};

const article = (state = initialState, action)=> {
  switch (action.type) {
    case ActionType.GET_TOP_REPOS:
      return getArticleStart(state, action);
    case ActionType.GET_TOP_REPOS_SUCCESS:
      return getArticleSuccess( state, action );
    case ActionType.GET_ARTICLE_DETAILS:
      return setArticleDetails( state, action );
    default:
      return state
  }
}

export default article;
