import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import Article from '../components/article';

const { publicRuntimeConfig } = getConfig()

const Index = (props) => (
  <Layout>
    <h1>The most popular articles</h1>
    { 
      props.list.map((article, i) => (
        <Article key={i} article={article}/>
      )) 
    }
  </Layout>
)


Index.getInitialProps = async function() {
  let url = publicRuntimeConfig.API_URL + publicRuntimeConfig.POPULAR_URL;
  url += publicRuntimeConfig.SECTION + '/'
        + publicRuntimeConfig.TIME_PERIOD + '.json?api-key='
        + publicRuntimeConfig.API_KEY;
  const res = await fetch(url);
  const data = await res.json();

  return {
    list: data.results
  }
}

export default Index