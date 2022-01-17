import React, {useState} from 'react';
import {Select, Row, Col} from 'antd';

import {useGetNewsQuery} from '../../services/newsApi';
import {useGetCryptosQuery} from '../../services/cryptoApi';

import Article from './Article';
import Loader from '../shared/Loader';

const {Option} = Select;

const News = ({simplified}) => {
	const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
	const {data: news} = useGetNewsQuery({newsCategory, count: simplified ? 6 : 12});
	const {data} = useGetCryptosQuery(100);

	if (!news?.value) {
		return (<Loader />);
	}

	return (
		<Row gutter={[24, 24]}>
			{!simplified && (
				<Col span={24}>
					<Select
						showSearch
						className="select-news"
						placeholder="Select a Crypto"
						optionFilterProp="children"
						onChange={value => setNewsCategory(value)}
						filterOption={(input, option) => option.children?.toLowerCase().indexOf(input.toLocaleLowerCase()) >= 0}
					>

						<Option value="Cryptocurrency">Cryptocurrency</Option>
						{data?.data?.coins.map(coin => <Option value={coin.name} key={coin.uuid}>{`${coin.name} (${coin.symbol})`}</Option>)}
					</Select>
				</Col>
			)}
			{news.value.map((article, i) => (<Article story={article} key={i}/>))}
		</Row>
	);
};

export default News;
