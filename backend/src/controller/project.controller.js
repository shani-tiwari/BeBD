const ProjectModel = require("../models/project.model");

// controlled by admin

const createProject = async (req, res, next) => {
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

    // checking Project exist in db or not (only if slug is provided)
    if (slug) {
      const isProjectExist = await ProjectModel.findOne({ slug });
      if (isProjectExist)
        return res.status(400).json({ msg: "Project already exists" });
    }

    const ProjectData = {
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

    const Project = await ProjectModel.create(ProjectData);
    return res
      .status(201)
      .json({ msg: "Project created successfully", Project });
  } catch (error) {
    next(error);
  }
};

const viewProjects = async (req, res, next) => {
  try {
    const Projects = await ProjectModel.find
    ({
      isDeleted: false,
      // status: "published",
    });
    if(Projects.length === 0) return res.status(400).json({msg: "projects are empty"});
    return res
      .status(200)
      .json({ msg: "Projects fetched successfully", Projects});
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const viewProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Project = await ProjectModel.findOne({ _id: id, isDeleted: false });
    if (!Project) return res.status(404).json({ msg: "Project not found" });

    return res
      .status(200)
      .json({ msg: "Project fetched successfully", Project });
  } catch (error) {
    next(error);
  }
};

const viewProjectByCategory = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }

    const Projects = await ProjectModel.find({
      isDeleted: false,
      status: "published",
      ...filter,
    });

    return res
      .status(200)
      .json({ msg: "Projects fetched successfully", Projects });
  } catch (error) {
    res.status(500).json({ error: "Unable to access by category" });
  }
};

const likeProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const Project = await ProjectModel.findOne({ _id: id, isDeleted: false });
    if (!Project) return res.status(404).json({ msg: "Project not found" });

    const isLiked = Project.likedBy.includes(userId);

    if (isLiked) {
      // Unlike
      Project.likedBy = Project.likedBy.filter(
        (uid) => uid.toString() !== userId.toString(),
      );
      Project.likes = Project.likedBy.length;
    } else {
      // Like
      Project.likedBy.push(userId);
      Project.likes = Project.likedBy.length;
    }

    await Project.save();
    res.json({ likes: Project.likes, isLiked: !isLiked });
  } catch (error) {
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { likes, likedBy, createdBy, isDeleted, ...updateData } = req.body;

    const Project = await ProjectModel.findOneAndUpdate(
      { _id: id, isDeleted: false },
      updateData,
      { new: true, runValidators: true },
    );
    if (!Project)
      return res.status(404).json({ msg: "Project not found or deleted" });

    return res
      .status(200)
      .json({ msg: "Project updated successfully", Project });
  } catch (error) {
    next(error);
  }
};

//  soft delete implemented
const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Project = await ProjectModel.findOneAndUpdate(
      { _id: id, isDeleted: false },
      { isDeleted: true },
      { new: true },
    );
    if (!Project) return res.status(404).json({ msg: "Project not found" });

    return res
      .status(200)
      .json({ msg: "Project deleted successfully", Project });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProject,
  viewProjects,
  viewProjectById,
  likeProject,
  updateProject,
  deleteProject,
  viewProjectByCategory,
};
