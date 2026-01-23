const imagekit = require("../services/imagekit");

const imagekitAuth = (req, res) => {
  try {
    const authParams = imagekit.getAuthenticationParameters();
    console.log("Auth Params:", JSON.stringify(authParams, null, 2));
    res.json(authParams);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = imagekitAuth;
