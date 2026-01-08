export default {
	upload: async() => {
	const res = await UploadToDrive.run();

		return res;
}
	}