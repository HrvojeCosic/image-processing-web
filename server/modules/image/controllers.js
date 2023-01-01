const imageServices = require('./services');


module.exports.submitImage = async (req, res) => {
	const processId = await imageServices.submitImage(req.file);
	const imageProcessingOptions = await imageServices.getImageProcessingOptions();
	
	res.status(200).send({
		processId, imageProcessingOptions
	});
};

module.exports.submitImageProcessingOptions = async (req, res) => {
	const { processId, processingOption, processingValue} = req.body;
	const resObj = await imageServices.submitImageProcessingOptions(processId, processingOption, processingValue);
	console.log('res', resObj);
	res.status(200).send(resObj);
};