import React from 'react';
import {Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';

import icon from '../../images/cryptocurrency.png';

const Logo = () => (
	<div className="logo-container">
		<Avatar src={icon} size="large" />
		<Typography.Title level={2} className="logo">
			<Link to="/">Cryptoverse</Link>
		</Typography.Title>
		{/* <Button className="menu-control-container"></Button> */}
	</div>
);

export default Logo;
