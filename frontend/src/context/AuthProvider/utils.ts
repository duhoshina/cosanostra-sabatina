import api from '../../services/axiosConfig';
import { IUser } from './types';

export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem('u', JSON.stringify(user));
};

export function getUserLocalStorage() {
    const json = localStorage.getItem('u');

    if(!json) {
        return null
    };

    const user = JSON.parse(json);

    return user ?? null;
};

export async function LoginRequest (email: string, password: string) {

    try {
        const request = await api.post('/auth', {email, password});

        return request.data;
    } catch (err) {
        return null;
    };

};