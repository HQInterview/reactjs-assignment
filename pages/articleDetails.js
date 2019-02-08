import React, { Component } from 'react';
import { 
	Wrapper,
	Title,
	Description,
	ArticleImageWrap,
	SourceWrapper,
	ELegantShadow,
	ArticleDescription,
	InsetShadow
} from './Style';

class articleDetails extends Component {
 	static async getInitialProps ({ store, query }) {
 		debugger;
		const data = await store.getState();
		return { articleDetails: data.article }
  	}

	state = {
	  storedArticles: ''
	}

	componentDidMount () {
	  this.getStoredArticles()
	}

	getStoredArticles=() => {
	  const storage = localStorage.article ? localStorage.article : localStorage.getItem('article')
	  let articles = JSON.parse(storage || '[]')
	  this.setState({ storedArticles: articles })
	}

 render () {
	let { articleDetails } = this.props
	if (!articleDetails) {
		articleDetails = this.state.storedArticles;
	}

	const abstract = articleDetails.abstract ? articleDetails.abstract : ''
	const title = articleDetails.title ? articleDetails.title : '';
	const ArticleImage = articleDetails.media
	 && articleDetails.media[0]
	 && articleDetails.media[0]['media-metadata'][2]
	 && articleDetails.media[0]['media-metadata'][2]['url']
	 ? articleDetails.media[0]['media-metadata'][2]['url'] : ''
	let SearchImage = articleDetails.multimedia
	&& articleDetails.multimedia[0] 
	&& articleDetails.multimedia[0].legacy.xlarge 
	? articleDetails.multimedia[0].legacy.xlarge : '';
	SearchImage = SearchImage ? `https://static01.nyt.com/${SearchImage}` : '';
	const publishedDate = articleDetails.published_date 
	? articleDetails.published_date : '';
	const description = articleDetails
	 && articleDetails.snippet 
	 ? articleDetails.snippet : '';
	const headline = articleDetails 
	&& articleDetails.headline 
	&& articleDetails.headline.main 
	? articleDetails.headline.main : '';
	const pubDate = articleDetails 
	&& articleDetails.pub_date 
	? articleDetails.pub_date : '';
	const source = articleDetails 
	&& articleDetails.source 
	? articleDetails.source : '';

	  return (
		<Wrapper>
			<InsetShadow>{title || headline}</InsetShadow>
			<ArticleDescription>{abstract || description}</ArticleDescription>
			{ArticleImage || SearchImage ? 
				(<ArticleImageWrap image={ArticleImage || SearchImage} />) : ''
			}
			<ELegantShadow>
				<small>({source})</small>
				<div>Published Date : {publishedDate || pubDate}</div>
			</ELegantShadow>
		</Wrapper>
		);
 	}
};

export default articleDetails
