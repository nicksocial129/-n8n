import { createChat } from '@n8n/chat/index';
export declare function createTestChat(options?: Parameters<typeof createChat>[0]): {
    unmount: () => void;
    container: Element;
};
