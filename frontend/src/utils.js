import axios from "axios";

export const getDataAPI = async (url, page) => {
	const res = await axios.get(`/api/${url}`);
	return res;
};
