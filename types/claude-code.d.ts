declare module '@anthropic-ai/claude-code' {
  export interface ClaudeCodeOptions {
    maxTurns?: number;
    systemPrompt?: string;
    workingDirectory?: string;
    format?: 'text' | 'json' | 'streaming-json';
    tools?: {
      allow?: string[];
      deny?: string[];
    };
    mcpServers?: any[];
    debug?: boolean;
    verbose?: boolean;
  }

  export interface QueryOptions {
    prompt: string;
    options?: ClaudeCodeOptions;
  }

  export interface Message {
    type?: string;
    content?: string;
    role?: string;
    [key: string]: any;
  }

  export function query(config: QueryOptions): AsyncGenerator<Message, void, unknown>;

  export class ClaudeCodeError extends Error {
    constructor(message: string);
  }
}