export const useConvertTo = () => {
	const hypenate = (str) => {
		return str.split(" ").join("-").toLowerCase();
	};
	return { hypenate };
};
