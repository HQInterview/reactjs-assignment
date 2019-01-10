import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import fetch from 'isomorphic-unfetch'

const {publicRuntimeConfig} = getConfig()

const initialState = {
  searchKey: '',
  list: []
}

export const actionTypes = {
  SEARCH: 'SEARCH',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      return Object.assign({}, state, {
        searchKey: '',
        list: action.list
      })
    default: return state
  }
}

// ACTIONS
export const search = (key) => dispatch => {
  return dispatch(searchArticle(key))
}

// FATCH DATA
const searchArticle = async (searchKey) =>{
  const url = publicRuntimeConfig.API_URL + 
              publicRuntimeConfig.SEARCH_URL +
              '?api-key=' + publicRuntimeConfig.API_KEY +
              '&q=' + searchKey
  const res = await fetch(url)
  const data = await res.json()

  return {
    list: data.response.docs
  }
}

export function initializeStore (state = initialState) {
  return createStore(reducer, state, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}