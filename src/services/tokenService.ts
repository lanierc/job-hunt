export const setToken = (token: string): void => {
	localStorage.setItem('token', token);
};

export const getToken = (): string => {
	localStorage.getItem('token');
};

export const removeToken = (): void => {
	localStorage.removeItem('token');
}
