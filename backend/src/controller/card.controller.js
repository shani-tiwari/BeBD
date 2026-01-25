const cardModel = require("../models/card.model");

// controlled by admin

const createCard = async (req, res, next) => {
  try {
    // data from the body
    const {
      title,
      description,
      implementationPlan,
      difficulty,
      resources,
      skills,
      version,
      category,
      slug,
      image,
    } = req.body;

    //  checking if required fields are present
    if (
      !title ||
      !description ||
      !implementationPlan ||
      !resources ||
      !skills ||
      !category
    )
      return res.status(400).json({ msg: "required fields are missing" });

    // checking card exist in db or not (only if slug is provided)
    if (slug) {
      const isCardExist = await cardModel.findOne({ slug });
      if (isCardExist)
        return res.status(400).json({ msg: "card already exists" });
    }

    const cardData = {
      title,
      description,
      implementationPlan,
      difficulty,
      resources,
      skills,
      version,
      category,
      slug,
      image,
      createdBy: req.user._id,
    };

    const card = await cardModel.create(cardData);
    return res.status(201).json({ msg: "card created successfully", card });
  } catch (error) {
    next(error);
  }
};

const viewCards = async (req, res, next) => {
  try {
    const cards = await cardModel.find({
      isDeleted: false,
      status: "published",
    });
    return res.status(200).json({ msg: "cards fetched successfully", cards });
  } catch (error) {
    next(error);
  }
};

const viewCardById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const card = await cardModel.findOne({ _id: id, isDeleted: false });
    if (!card) return res.status(404).json({ msg: "card not found" });

    return res.status(200).json({ msg: "card fetched successfully", card });
  } catch (error) {
    next(error);
  }
};

const likeCard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const card = await cardModel.findOne({ _id: id, isDeleted: false });
    if (!card) return res.status(404).json({ msg: "card not found" });

    const isLiked = card.likedBy.includes(userId);

    if (isLiked) {
      // Unlike
      card.likedBy = card.likedBy.filter(
        (uid) => uid.toString() !== userId.toString(),
      );
      card.likes = card.likedBy.length;
    } else {
      // Like
      card.likedBy.push(userId);
      card.likes = card.likedBy.length;
    }

    await card.save();
    res.json({ likes: card.likes, isLiked: !isLiked });
  } catch (error) {
    next(error);
  }
};

const updateCard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const card = await cardModel.findOneAndUpdate(
      { _id: id, isDeleted: false },
      req.body,
      { new: true },
    );
    if (!card)
      return res.status(404).json({ msg: "card not found or deleted" });

    return res.status(200).json({ msg: "card updated successfully", card });
  } catch (error) {
    next(error);
  }
};

//  soft delete implemented
const deleteCard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const card = await cardModel.findOneAndUpdate(
      { _id: id, isDeleted: false },
      { isDeleted: true },
      { new: true },
    );
    if (!card) return res.status(404).json({ msg: "card not found" });

    return res.status(200).json({ msg: "card deleted successfully", card });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCard,
  viewCards,
  viewCardById,
  likeCard,
  updateCard,
  deleteCard,
};
