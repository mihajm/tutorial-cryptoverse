import React from 'react';
import {Typography, Avatar, Button} from 'antd';
import {Link} from 'react-router-dom';

import icon from '../../images/cryptocurrency.png';
import {MenuOutlined} from '@ant-design/icons';

const Logo = ({setMenu, activeMenu}) => (
	<div className="logo-container">
		<Avatar src={icon} size="large" />
		<Typography.Title level={2} className="logo">
			<Link to="/">Cryptoverse</Link>
		</Typography.Title>
		<Button className="menu-control-container" onClick={() => setMenu(!activeMenu)}>
			<MenuOutlined />
		</Button>
	</div>
);

export default Logo;
