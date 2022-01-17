import React from 'react';
import HTMLReactParser from 'html-react-parser';

import {Col, Row, Typography} from 'antd';

const Description = ({name, description, links}) => (
	<Col className="coin-desc-link">
		<Row className="coin-desc">
			<Typography.Title level={3} className="coin-details-heading">
            What is {name}?
				{description && HTMLReactParser(description)}
			</Typography.Title>
		</Row>
		{Array.isArray(links) && <Col className="coin-links">
			<Typography.Title level={3} className="coin-details-heading">
				{name} Links
			</Typography.Title>
			{links.map(({name, type, url}) => (
				<Row className="coin-link" key={name}>
					{type && <Typography.Title level={5} className="link-name">
						{type}
					</Typography.Title>}
					{url && <a href={url} target="_blank" rel="noreferrer">
						{name}
					</a>}
				</Row>
			))}
		</Col>}
	</Col>
);

export default Description;
