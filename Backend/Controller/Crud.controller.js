const Postone = (model) => async (req, res) => {
  try {
    const data = await model.create(req.body);
    res.status(201).send({ msg: "successfull", data: data });
  } catch (e) {
    res.status(500).send({ msg: "failed" });
  }
};

const PostMany = (model) => async (req, res) => {
  try {
    const data = await model.insertMany(req.body);
    res.status(201).send({ msg: "successfull", data: data });
  } catch (e) {
    res.status(500).send({ msg: e });
  }
};

const GetAll = (model) => async (req, res) => {
  try {
    const data = await model.find().lean().exec();
    res.status(201).send({ msg: "successfull", data: data });
  } catch (e) {
    res.status(500).send({ msg: "failed" });
  }
};

const DeleteItem = (model) => async (req, res) => {
  try {
    const data = await model.findByIdAndDelete(req.params.id);

    res.status(201).send(data);
  } catch (e) {
    res.status(500).send({ msg: "failed" });
  }
};

const PostFavourite = (model) => async (req, res) => {
  try {
    const data = await model.create({ ...req.body, user: req.user._id });

    res.status(201).send(data);
  } catch (e) {
    res.status(500).send({ msg: "failed" });
  }
};

const getFavourites = (model) => async (req, res) => {
  try {
    const data = await model.find({ user: req.user._id });
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send({ msg: "failed" });
  }
};

module.exports = { PostMany, Postone, GetAll, DeleteItem,getFavourites,PostFavourite };
