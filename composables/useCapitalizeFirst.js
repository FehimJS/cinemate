export const useCapitalizeFirst = () => {
	const capitalizeFirstLetter = (input) => {
		return input.charAt(0).toUpperCase() + input.slice(1) + ' ';
	};
	return { capitalizeFirstLetter };
};
