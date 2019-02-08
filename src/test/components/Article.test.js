import React from 'react'
import Immutable from 'immutable'
import { shallow } from 'enzyme'
import Article from 'components/Article'

describe('Components::Article', () => {
  let props
  beforeEach(() => {
    props = {
      repos: Immutable.fromJS({
        lang: 'lang',
        totalCount: 2,
        items: [{
          id: 1
        }, {
          id: 2
        }]
      })
    }
  })

  function renderDoc () {
    return shallow(<Article {...props} />)
  }

  it('renders all items', () => {
    let doc = renderDoc()
    let node = doc.find('h1')
    expect(node).toHaveLength(props.repos.get('items').size)
  })
})
