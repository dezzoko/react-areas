export interface Ai {
    id?: string;
    choices?: Choice[];
    createdAt: string;
    question: string;
}

interface Choice {
    message: Message;
}
interface Message {
    content: string;
}

export interface AiSchema {
    aiResponses: Ai[];
    isLoading: boolean;
    error?: unknown;
}
