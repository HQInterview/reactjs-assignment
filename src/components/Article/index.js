import React from 'react'
import {
	Card,
	CardInsider,
	CoverPic,
	CardBody,
	CardFooter,
	CardWrapper,
	Title,
	Description
} from './Style';

const Article = (props) => {
  const { data,
	published_date,
	headline ,
	pub_date,
	title,
	lead_paragraph,
	abstract,
	handleArticleDetails
  } = props

  const ArticleImage = props.media
   	&& props.media[0]
	&& props.media[0]['media-metadata'][2]
	&& props.media[0]['media-metadata'][2]['url']
	? props.media[0]['media-metadata'][2]['url'] : '';

  	let SearchImage = props.multimedia 
  	&& props.multimedia[0] 
  	&& props.multimedia[0].legacy.xlarge 
  	? props.multimedia[0].legacy.xlarge : '';

	SearchImage =SearchImage ? `https://static01.nyt.com/${SearchImage}` : '';
    const searchTitle = headline && headline.main ? headline.main : '';
	  return (
		<CardWrapper onClick={() => handleArticleDetails(props)} >
			<Card>
				<CardInsider>
					<CoverPic url={ArticleImage || SearchImage} />
						<CardBody>
							<Title>{title || searchTitle}</Title>
							<Description>{lead_paragraph || abstract}</Description>
						</CardBody>
					</CardInsider>
				<CardFooter>Published Date : { published_date ? published_date : pub_date }</CardFooter>
			</Card>
		</CardWrapper>
	  )
}

export default Article;