import React from 'react';
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

class Page extends React.Component {
  componentDidMount () {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV) // expected 'staging' to be printed here when running `npm run staging`
    console.log('process.env.BUILD_VERSION', process.env.BUILD_VERSION) // '1.0.0'
  }

  render () {
    return (
      <div>
        {publicRuntimeConfig.API_URL}
      </div>
    )
  }
}

export default Page;