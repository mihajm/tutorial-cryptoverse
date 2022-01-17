import React from 'react';
import {Typography} from 'antd';
import {Link} from 'react-router-dom';

const Simplified = ({children, title, url}) => {
	if (!title) {
		return (<></>);
	}

	return (
		<>
			<div className="home-heading-container">
				<Typography.Title level={2}>{title}</Typography.Title>
				<Typography.Title level={3} className="show-more">
					<Link to={url}>Show More</Link>
				</Typography.Title>
			</div>
			{children}
		</>

	);
};

export default Simplified;
