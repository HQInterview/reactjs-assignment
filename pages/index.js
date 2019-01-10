import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import Article from '../components/article';
import SearchBar from '../components/searchbar';


const {publicRuntimeConfig} = getConfig()

const Index = (props) => (
  <Layout>
    <SearchBar />
    <h1>The most popular articles</h1>
    { 
      props.list.map((article, i) => (
        <Article key={i} article={article}/>
      )) 
    }
  </Layout>
)


Index.getInitialProps = async function() {
  const url = publicRuntimeConfig.API_URL + '/' 
              + publicRuntimeConfig.SECTION + '/'
              + publicRuntimeConfig.TIME_PERIOD + '.json?api-key='
              + publicRuntimeConfig.API_KEY;
  const res = await fetch(url);
  const data = await res.json();

  return {
    list: data.results
  }
}

export default Index