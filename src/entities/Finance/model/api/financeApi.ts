import { rtkApi } from '@/shared/api/rtkApi';
import { Finance } from '../types/finance';

export const financeApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        searchFinancialData: builder.query<Finance[], string>({
            query: (query) => ({
                url: `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=5&apikey=${
                    import.meta.env.VITE_FINANCIAL_API_KEY
                }`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useLazySearchFinancialDataQuery } = financeApi;
