import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import createRequestFactory from './createRequest';

const headers = {
	'x-bingapis-sdk': 'true',
	'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
	'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
};

const createRequest = createRequestFactory(headers);

export const newsApi = createApi({
	reducerPath: 'news',
	baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_NEWS_API_URL}),
	endpoints: builder => ({
		getNews: builder.query({
			query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
		}),
	}),
});

export const {
	useGetNewsQuery,
} = newsApi;
