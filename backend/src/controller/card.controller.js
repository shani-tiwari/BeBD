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
        } = req.body;

        //  checking if any field is not present
        if (
        !title ||
        !description ||
        !implementationPlan ||
        !resources ||
        !skills ||
        !version ||
        !category ||
        !slug
        )
        return res.status(400).json({ msg: "all fields are required" });

        // checking card exist in db or not
        const isCardExist = await cardModel.findOne({ slug });
        if (isCardExist) return res.status(400).json({ msg: "card already exist" });


        const card = await cardModel.create({
        title,
        description,
        implementationPlan,
        difficulty,
        resources,
        skills,
        version,
        category,
        slug,
        });
        return res.status(201).json({ msg: "card created successfully", card });

    } catch (error) {
        next(error);
    }
};

const viewCards = async(req, res, next) => {
    try {
        const cards = await cardModel.find();
        return res.status(200).json({msg: "cards fetched successfully", cards});
    } catch (error) {
        next(error);
    }   
};

const viewCardBySlug = async(req, res, next) => {
    try {
        const {id} = req.params;
        const cards = await cardModel.findById(id);
        if(!cards) return res.status(404).json({msg: "card not found"});
        return res.status(200).json({msg: "cards fetched successfully", cards});
    } catch (error) {
        next(error);
    }   
};

const updateCard = async(req, res, next) => {
    try { 
        const {id} = req.params;
        const {title, description, implementationPlan, difficulty, resources, skills, version, category, slug} = req.body;
        const card = await cardModel.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).json({msg: "card updated successfully", card});
    } catch (error) {
        next(error);
    }
};

const deleteCard = async(req, res, next) => {
    try {
        const {id} = req.params;
        const card = await cardModel.findByIdAndDelete(id); 
        return res.status(200).json({msg: "card deleted successfully", card});
    } catch (error) {
        next(error);
    }
};

module.exports = { createCard, viewCards, viewCardBySlug, updateCard, deleteCard };
