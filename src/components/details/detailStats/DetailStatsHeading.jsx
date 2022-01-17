import React from 'react';

import {Col, Typography} from 'antd';

const DetailStatsHeading = ({name, textEnd}) => {
	if (!textEnd) {
		textEnd = name;
	}

	return (
		<Col className="coin-value=statistics-heading">
			<Typography.Title className="coin-details-heading" level={3}>
				{name} Statistics
			</Typography.Title>
			<p>
            An overview showing the stats of {textEnd}
			</p>
		</Col>
	);
};

export default DetailStatsHeading;
