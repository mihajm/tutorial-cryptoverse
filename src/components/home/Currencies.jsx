import React from 'react';
import {Typography} from 'antd';
import {Link} from 'react-router-dom';

import Cryptocurrencies from '../currencies/Cryptocurrencies';
import Simplified from './Simplified';

const Currencies = () => (
	<Simplified title="Top 10 CryptoCurrencies in the world" url="/cryptocurrencies">
		<Cryptocurrencies simplified />
	</Simplified>
);

export default Currencies;
