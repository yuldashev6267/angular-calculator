const historyModel = require("../model/HistoryModel");

exports.createHistory = async (req, res) => {
  try {
    const history = await historyModel.create({
      history: req.body.history,
    });
    res.status(201).json({
      status: "success",
      data: {
        history,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllHistory = async (req, res) => {
  try {
    const histories = await historyModel.find().sort({ history: 1 });
    res.status(200).json({
      status: "success",
      data: {
        histories,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteHistory = async (req, res) => {
  try {
    const deleteMany = await historyModel.deleteMany();
    res.status(200).json({
      status: "success",
      message: "All history deleted",
    });
  } catch (error) {
    console.log(error);
  }
};
