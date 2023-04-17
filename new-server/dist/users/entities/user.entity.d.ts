import { Credentials } from './credentials.entity';
export declare class User {
    id: number;
    name: string;
    username: string;
    avatar?: string;
    background?: string;
    isLocal: boolean;
    credentials: Credentials;
}
