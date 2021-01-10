import { useState, useEffect } from 'react';

export const LocalStorage = (key, defaultValue) => {
	defaultValue = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInJvbGVfaWQiOjMsIm5hbWUiOiJzdHVkZW50IHNpeCIsImFkcmVzcyI6IkNoYWdyaW4gRmFsbHMiLCJlbWFpbCI6InN0dWRlbnQ2QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoic2FkNGFzNTZkNDY0IiwicGhvbmUiOiI0MTktNTAzLTI0ODQiLCJpYXQiOjE2MDk5NDgxOTUsImV4cCI6MTYwOTk0ODE5Nn0.zsECZecuGsO02wI4z8ri9zyCOxIAvD0av5UoM50rnZk";
	const token = localStorage.getItem(key);
	const initial = token ? token : defaultValue;
	const [value, setValue] = useState(initial);

	useEffect(() => {
		localStorage.setItem(key, value);
	}, [key, value]);

	return [value, setValue];
}

