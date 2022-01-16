import React from 'react';

import {Layout} from 'antd';
import AppRoutes from '../routes/AppRoutes';
import AppFooter from './AppFooter';

const Main = () => (
	<div className="main">
		<Layout>
			<AppRoutes />
		</Layout>
		<AppFooter />
	</div>
);

export default Main;
