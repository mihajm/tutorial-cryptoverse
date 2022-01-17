import React from 'react';
import {Select, Typography, Row, Col, Avatar, Card} from 'antd';

import {newsApi, useGetNewsQuery} from '../../services/newsApi';
import moment from 'moment';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const Article = ({story}) => {
	if (!story) {
		return (<></>);
	}

	return (
		<Col xs={24} sm={12} lg={8}>
			<Card hoverable className="news-card">
				<a href={story.url} target="_blank" rel="noreferrer">
					<div className="news-image-container">
						<Typography.Title level={4} className="news-title">{story.name}</Typography.Title>
						<img style={{maxWidth: '200px', maxHeight: '100px'}} src={story?.image?.thumbnail?.contentUrl || demoImage} />
					</div>
					<p>
						{story.description?.length > 100 ? `${story.description.substring(0, 100)}...` : story.description}
					</p>
					<div className="provider-container">
						<div>
							<Avatar src={story.provider[0]?.image?.thumbnail?.contentUrl || demoImage}/>
							<Typography.Text className="provider-name">{story.provider[0]?.name}</Typography.Text>
						</div>
						<Typography.Text className="p">{moment(story.datePublished).startOf('ss').fromNow()}</Typography.Text>
					</div>
				</a>
			</Card>
		</Col>

	);
};

export default Article;
