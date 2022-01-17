import React from 'react';

import {Col, Typography} from 'antd';

const BaseCoinStats = ({title, icon, value}) => (
	<Col className="coin-stats" key={title}>
		{value && <>
			<Col className="coin-stats-name">
				{icon && <Typography.Text>{icon}</Typography.Text>}
				{title && <Typography.Text>{title}</Typography.Text>}
			</Col>
			<Typography.Text className="stats">{value}</Typography.Text>
		</>}
	</Col>
);

export default BaseCoinStats;
