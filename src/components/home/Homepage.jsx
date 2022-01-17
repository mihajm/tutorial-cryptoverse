import React from 'react';

import {useGetCryptosQuery} from '../../services/cryptoApi';

import Stats from './Stats';
import Currencies from './Currencies';
import LatestNews from './LatestNews';
import Loader from '../shared/Loader';

const Homepage = () => {
	const {data, isFetching} = useGetCryptosQuery(10);

	if (isFetching) {
		return (<Loader />);
	}

	return (
		<>
			{data?.data?.stats && <Stats stats={data?.data?.stats} />}
			<Currencies />
			<LatestNews />
		</>
	);
};

export default Homepage;
