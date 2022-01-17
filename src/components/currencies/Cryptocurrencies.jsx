import React, {useState, useEffect} from 'react';
import {Row, Input} from 'antd';

import {useGetCryptosQuery} from '../../services/cryptoApi';

import CurrencyCard from './CurrencyCard';

import Loader from '../shared/Loader';

const Cryptocurrencies = ({simplified}) => {
	const count = simplified ? 10 : 100;
	const {data: cryptoList, isFetching} = useGetCryptosQuery(count);
	const [cryptos, setCryptos] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const isSearchable = () => !simplified;

	useEffect(() => {
		let filtered = cryptoList?.data?.coins;

		if (isSearchable()) {
			const term = searchTerm.toLocaleLowerCase();

			filtered = cryptoList?.data?.coins
				.filter(c =>
					c.name.toLocaleLowerCase().includes(term) || c.symbol.toLowerCase().includes(term));
		}

		setCryptos(filtered);
	}, [cryptoList, searchTerm]);

	if (isFetching) {
		return (<Loader />);
	}

	return (
		<>
			{isSearchable() && <div className="search-crypto">
				<Input placeholder="Search for Cryptocurrency" onChange={e => setSearchTerm(e.target.value)}/>
			</div>}
			<Row gutters={[32, 32]} className="crypto-card-container">
				{cryptos?.map(cur => (<CurrencyCard currency={cur} key={cur.uuid} />))}
			</Row>
		</>
	);
};

export default Cryptocurrencies;
