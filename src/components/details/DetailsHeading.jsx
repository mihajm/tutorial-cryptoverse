import React from 'react';
import {Col, Typography} from 'antd';

const DetailsHeading = ({name, symbol}) => (
	<Col className="coin-heading-container">
		<Typography.Title level={2} className="coin-name">
			{name} ({symbol}) Price
		</Typography.Title>
		<p>
			{name} live price in US dollars.
        View value statistics, market cap and supply.
		</p>
	</Col>
);

export default DetailsHeading;
