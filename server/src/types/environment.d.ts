declare global {
    namespace NodeJS {
        interface ProcessEnv {
            POSTGRES_DATABASE?: string;
            POSTGRES_USER?: string;
            POSTGRES_PORT?: string;
            ENV:'start' | 'dev' | 'prod';
        }
    }
}

export {};