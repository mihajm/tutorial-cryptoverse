import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import createRequestFactory from './createRequest';

const headers = {
	'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
	'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};

const createRequest = createRequestFactory(headers);

export const cryptoApi = createApi({
	reducerPath: 'crypto',
	baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_CRYPTO_API_URL}),
	endpoints: builder => ({
		getCryptos: builder.query({
			query: count => createRequest(`/coins?limit=${count}`),
		}),
		getCryptoDetails: builder.query({
			query: id => createRequest(`/coin/${id}`),
		}),
		getCryptoHistory: builder.query({
			query: ({id, timePeriod}) => createRequest(`/coin/${id}/history?timePeriod=${timePeriod}`),
		}),
	}),
});

export const {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi;
