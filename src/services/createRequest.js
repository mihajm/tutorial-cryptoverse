const createRequestFactory = headers => url => ({url, headers});

export default createRequestFactory;
