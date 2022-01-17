import React from 'react';
import {Typography} from 'antd';
import {Link} from 'react-router-dom';

import News from '../news/News';
import Simplified from './Simplified';

const LatestNews = () => (
	<Simplified title="Latest Crypto News" url="/news">
		<News simplified />
	</Simplified>
);

export default LatestNews;
