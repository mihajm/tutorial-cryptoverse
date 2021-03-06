import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import {BulbOutlined, FundOutlined, HomeOutlined} from '@ant-design/icons';

const AppMenu = ({activeMenu}) => (
	<>
		{activeMenu && <Menu theme="dark">
			<Menu.Item icon={<HomeOutlined />} key={'home'}>
				<Link to="/">Home</Link>
			</Menu.Item>
			<Menu.Item icon={<FundOutlined />} key={'cryptocurrencies'}>
				<Link to="/cryptocurrencies">Cryptocurrencies</Link>
			</Menu.Item>
			<Menu.Item icon={<BulbOutlined />} key={'news'}>
				<Link to="/news">News</Link>
			</Menu.Item>
		</Menu>}
	</>

);

export default AppMenu;
