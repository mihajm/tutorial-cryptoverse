import React from 'react';

import {Line as ChartJS} from 'chart.js/auto';
import {Line} from 'react-chartjs-2';
import {Col, Row, Typography} from 'antd';

const LineChart = ({history, currentPrice, name}) => {
	const coinPrice = [];
	const coinTimestamp = [];

	history?.data?.history.forEach(item => {
		coinPrice.push(item.price);
		coinTimestamp.push(new Date(item.timestamp * 1000).toLocaleDateString());
	});
	const data = {
		labels: coinTimestamp,
		datasets: [
			{
				label: 'Price In USD',
				data: coinPrice,
				fill: false,
				backgroundColor: '#0071bd',
				borderColor: '#0071bd',
			},
		],
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};

	return (
		<>
			{name && <Row className="chart-header">
				<Typography.Title className="chart-title" level={2}>
					{name} Price Chart
				</Typography.Title>
				<Col className="price-container">
					<Typography.Title className="price-change" level={5}>
						{history?.data?.change}%
					</Typography.Title>
					<Typography.Title className="current-price" level={5}>
						Current {name} Price: {currentPrice}
					</Typography.Title>
				</Col>
			</Row>}
			<Line data={data} options={options} />
		</>
	);
};

export default LineChart;
