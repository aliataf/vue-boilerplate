export function getDeep(obj, string, splitter = '/') {
	let result = obj;
	string.split(splitter).forEach((item) => {
		if (typeof result == 'object') result = result[item];
		else result = undefined;
	});
	return result;
}

export function appendOptionalParams(params, optionalParams) {
	let res = { ...params };
	for (let key of Object.keys(optionalParams)) {
		if (optionalParams[key] !== null) {
			res[key] = optionalParams[key];
		}
	}

	return res;
}

export function generalKeyFormatter(obj, key) {
	let res = '--';
	if (obj && obj[key]) {
		res = obj[key];
	}

	return res;
}

export function nameFormatter(obj, key = 'name') {
	return generalKeyFormatter(obj, key);
}
