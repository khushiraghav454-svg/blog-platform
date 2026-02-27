const router=require("express").Router();
const protect=require("../middleware/authMiddleware");
const {
 createPost,
 getPosts,
 getSinglePost,
 updatePost,
 deletePost
}=require("../controllers/postController");

router.post("/",protect,createPost);
router.get("/",getPosts);
router.get("/:id",getSinglePost);
router.put("/:id",protect,updatePost);
router.delete("/:id",protect,deletePost);

module.exports=router;