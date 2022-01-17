import React from 'react';
import millify from 'millify';
import {Card, Col} from 'antd';

import {Link} from 'react-router-dom';

const CurrencyCard = ({currency}) => {
	if (!currency || !currency.uuid) {
		return (<></>);
	}

	return (
		<Col xs={24} sm={12} lg={8} className="crypto-card">
			<Link to={`/crypto/${currency.uuid}`}>
				<Card
					title={`${currency.rank}. ${currency.name} (${currency.symbol})`}
					extra={<img className="crypto-image" src={currency.iconUrl} />}
					hoverable
				>
					{currency.price && <p>Price: {millify(currency.price)}</p>}
					{currency.marketCap && <p>Market Cap: {millify(currency.marketCap)}</p>}
					{currency.change && <p>Daily Change: {currency.change}%</p>}
				</Card>
			</Link>
		</Col>

	);
};

export default CurrencyCard;
