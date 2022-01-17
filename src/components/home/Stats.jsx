import React from 'react';
import millify from 'millify';

import {Typography, Row, Col, Statistic} from 'antd';

const Stats = ({stats}) => (
	<>
		<Typography.Title level={2} className="heading">
			Global Crypto Stats
		</Typography.Title>
		<Row>
			{stats.total && <Col span={12}>
				<Statistic title="Total Cryptocurrencies" value={stats.total} />
			</Col>}
			{stats.totalExchanges && <Col span={12}>
				<Statistic title="Total Exchanges" value={millify(stats.totalExchanges)} />
			</Col>}
			{stats.totalMarketCap && <Col span={12}>
				<Statistic title="Total Market Cap" value={millify(stats.totalMarketCap)} />
			</Col>}
			{stats.total24hVolume && <Col span={12}>
				<Statistic title="Total 24h Volume" value={millify(stats.total24hVolume)} />
			</Col>}
			{stats.totalMarkets && <Col span={12}>
				<Statistic title="Total Markets" value={millify(stats.totalMarkets)} />
			</Col>}
		</Row>
	</>
);

export default Stats;
