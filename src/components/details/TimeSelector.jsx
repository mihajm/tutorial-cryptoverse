import React from 'react';

import {Select} from 'antd';

const TimeSelector = ({setPeriod}) => {
	const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

	return (
		<Select
			defaultValue="7d"
			className="select-timeperiod"
			placeholder="Select time period"
			onChange={value => setPeriod(value)}
		>
			{time.map(date => <Select.Option key={date}>{date}</Select.Option>)}
		</Select>
	);
};

export default TimeSelector;
