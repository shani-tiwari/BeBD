// export default function checkRole(req, res, next){
//     if(!req.user)
//         return res.status(401).json({ msg: "unauthorized: no token provided" });

//     if(req.user.role !== 'admin')
//         return res.status(401).json({ msg: "unauthorized: no token provided" });

//     next();
// };

const roleMiddleware = (roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(req.user ? 403 : 401).json({
        msg: req.user ? "Forbidden" : "Unauthorized: No user found",
      });
    }
    next();
  };
};

module.exports = roleMiddleware;
