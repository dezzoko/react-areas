import { rtkApi } from '@/shared/api/rtkApi';
import { Ai } from '../types/ai';

export const aiApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getChatResponse: builder.mutation<Ai, string>({
            query: (message) => {
                return {
                    url: `https://api.openai.com/v1/chat/completions`,
                    method: 'POST',
                    body: {
                        max_tokens: 200,
                        model: 'gpt-3.5-turbo-16k',
                        messages: [{ role: 'user', content: message }],
                    },
                    headers: {
                        Authorization: `Bearer ${
                            import.meta.env.VITE_AI_API_KEY
                        }`,
                        'Content-Type': 'application/json',
                    },
                };
            },
        }),
    }),
    overrideExisting: true,
});

export const { useGetChatResponseMutation } = aiApi;
