import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (api, method, body) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const reset = () => {
        setData([]);
        setIsError(false);
        setIsLoading(true);
    };

    const fetchData = useCallback(
        async (api, method, body) => {
            if (api) {
                const URL = `http://localhost:8000/${api}`;
                reset();
                console.log("hello");
                try {
                    const response = await axios({ method, url: URL, data: body, withCredentials: true });
                    setData(response.data);
                } catch (error) {
                    setIsError(error);
                }
                setIsLoading(false);
            }
        },
        []
    );

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, isLoading, isError, fetchData };
};

export default useFetch;
