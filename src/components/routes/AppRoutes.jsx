import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Homepage from '../home/Homepage';
import Exchanges from '../exchanges/Exchanges';
import Cryptocurrencies from '../currencies/Cryptocurrencies';
import CryptoDetails from '../details/CryptoDetails';
import News from '../news/News';

const AppRoutes = () => (
	<div className="routes">
		<Routes>
			<Route exact path="/" element={<Homepage />}/>
			<Route exact path="/exchanges" element={<Exchanges />} />
			<Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
			<Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
			<Route exact path="/news" element={<News />} />
		</Routes>
	</div>
);

export default AppRoutes;
