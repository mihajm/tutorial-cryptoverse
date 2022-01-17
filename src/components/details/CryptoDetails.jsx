import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

import {Col} from 'antd';

import {useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} from '../../services/cryptoApi';
import DetailsHeading from './DetailsHeading';
import TimeSelector from './TimeSelector';
import DetailStats from './detailStats/DetailStats';
import Description from './Description';
import LineChart from './chart/LineChart';
import millify from 'millify';
import Loader from '../shared/Loader';

const CryptoDetails = () => {
	const {coinId} = useParams();
	const [timePeriod, setTimePeriod] = useState('7d');

	const {data, isFetching} = useGetCryptoDetailsQuery(coinId);
	const {data: coinHistory} = useGetCryptoHistoryQuery({id: coinId, timePeriod});

	const coin = data?.data?.coin;

	if (isFetching) {
		return (<Loader />);
	}

	if (!coin) {
		return 'Sorry, no coin details could be found';
	}

	return (
		<Col className="coin-detail-container">
			{coin.name && coin.symbol && <DetailsHeading name={coin.name} symbol={coin.symbol} />}
			<TimeSelector setPeriod={setTimePeriod} />
			<LineChart history={coinHistory} currentPrice={millify(coin.price)} name={coin.name} />
			<DetailStats coin={coin} />
			<Description name={coin.name} description={coin.description} links={coin.links} />
		</Col>
	);
};

export default CryptoDetails;
