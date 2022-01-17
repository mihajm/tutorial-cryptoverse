import React from 'react';
import millify from 'millify';

import {Col} from 'antd';
import {MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined} from '@ant-design/icons';

import BaseCoinStats from './BaseCoinStats';
import DetailStatsHeading from './DetailStatsHeading';

const DetailStats = ({coin}) => {
	const stats = [
		{title: 'Price to USD', value: `$ ${coin?.price && millify(coin?.price)}`, icon: <DollarCircleOutlined />},
		{title: 'Rank', value: coin?.rank, icon: <NumberOutlined />},
		{title: '24h Volume', value: `$ ${coin?.volume && millify(coin?.volume)}`, icon: <ThunderboltOutlined />},
		{title: 'Market Cap', value: `$ ${coin?.marketCap && millify(coin?.marketCap)}`, icon: <DollarCircleOutlined />},
		{title: 'All-time-high(daily avg.)', value: `$ ${coin?.allTimeHigh?.price && millify(coin?.allTimeHigh?.price)}`, icon: <TrophyOutlined />},
	];

	const genericStats = [
		{title: 'Number Of Markets', value: coin?.numberOfMarkets, icon: <FundOutlined />},
		{title: 'Number Of Exchanges', value: coin?.numberOfExchanges, icon: <MoneyCollectOutlined />},
		{title: 'Aprroved Supply', value: coin?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined />},
		{title: 'Total Supply', value: `$ ${coin?.supply?.total && millify(coin?.supply?.total)}`, icon: <ExclamationCircleOutlined />},
		{title: 'Circulating Supply', value: `$ ${coin?.supply?.circulating && millify(coin?.supply?.circulating)}`, icon: <ExclamationCircleOutlined />},
	];

	if (!coin) {
		return (<></>);
	}

	return (
		<Col className="stats-container">
			<Col className="coin-value-statistics">
				{coin.name && <DetailStatsHeading name={coin.name}/>}
				{Array.isArray(stats) && stats.map(({icon, title, value}) => (<BaseCoinStats title={title} value={value} icon={icon} key={title}/>))}
			</Col>
			<Col className="other-value-statistics">
				{coin.name && <DetailStatsHeading name="Other" textEnd="all cryptocurrencies" />}
				{Array.isArray(genericStats) && genericStats.map(({icon, title, value}) => (<BaseCoinStats title={title} value={value} icon={icon} key={title}/>))}
			</Col>
		</Col>
	);
};

export default DetailStats;
