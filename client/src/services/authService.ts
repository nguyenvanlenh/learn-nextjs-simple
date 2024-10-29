import envConfig from '@/config';
import { LoginBodyType, RegisterBodyType } from '../schemaValidations/auth.schema';
type AuthParams = {
    sessionToken: string;
    expiresAt: string;
};

export const authService = {
    login: (loginRequest: LoginBodyType) => {
        return fetch(`${envConfig.NET_PUBLIC_API_ENDPOINT}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(loginRequest),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    register: (regiterRequest: RegisterBodyType) => {
        return fetch(`${envConfig.NET_PUBLIC_API_ENDPOINT}/auth/register`, {
            method: 'POST',
            body: JSON.stringify(regiterRequest),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}