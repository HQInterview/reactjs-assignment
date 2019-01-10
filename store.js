import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()

const initialState = {
  searchKey: '',
  list: []
}

export const actionTypes = {
  SEARCHING: 'SEARCHING',
  TYPEKEY: 'TYPEKEY',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCHING:
      return Object.assign({}, state, {
        searchKey: '',
        list: action.list
      })
    case actionTypes.TYPEKEY:
      return Object.assign({}, state, {
        searchKey: action.searchKey,
      })
    default: return state
  }
}

// ACTIONS
export const typeKey = (key) => dispatch => {
  return dispatch({searchKey: key})
}

export const search = (key) => dispatch => {
  return dispatch(searchArticle(key))
}

// FATCH DATA
const searchArticle = async (searchKey) => {
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