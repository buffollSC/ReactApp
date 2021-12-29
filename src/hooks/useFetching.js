import { useState } from 'react';

export const useFetching = (callback) => {
    const [isLoading, setIsLoanding] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setIsLoanding(true);
            await callback();
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoanding(false);
        }
    }
    return [fetching, isLoading, error];
}
