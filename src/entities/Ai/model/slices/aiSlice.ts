import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Ai, AiSchema } from '../types/ai';

const initialState: AiSchema = {
    aiResponses: [],
    isLoading: false,
};

export const aiSlice = createSlice({
    name: 'ai',
    initialState,
    reducers: {
        pushAiQuestion: (state, { payload }: PayloadAction<string>) => {
            state.aiResponses.push({
                createdAt: new Date().toString(),
                question: payload,
            });
        },

        updateLastAiResponse: (state, { payload }: PayloadAction<Ai>) => {
            const lastResponse =
                state.aiResponses[state.aiResponses.length - 1];
            if (lastResponse) {
                lastResponse.choices = payload.choices;
                lastResponse.id = payload.id;
            }
        },
    },
});

export const { actions: aiActions } = aiSlice;
export const { reducer: aiReducer } = aiSlice;
