const Post=require("../models/Post");

exports.createPost=async(req,res)=>{
 try{
  const {title,content}=req.body;

  const post=await Post.create({
   title,
   content,
   author:req.user.id
  });

  res.status(201).json(post);
 }catch(err){
  res.status(500).json({message:err.message});
 }
};

exports.getPosts=async(req,res)=>{
 const posts=await Post.find().populate("author","username").sort({createdAt:-1});
 res.json(posts);
};

exports.getSinglePost=async(req,res)=>{
 const post=await Post.findById(req.params.id).populate("author","username");
 if(!post) return res.status(404).json({message:"Not found"});
 res.json(post);
};

exports.updatePost=async(req,res)=>{
 const post=await Post.findById(req.params.id);

 if(post.author.toString()!==req.user.id)
  return res.status(403).json({message:"Not allowed"});

 post.title=req.body.title;
 post.content=req.body.content;

 await post.save();
 res.json(post);
};

exports.deletePost=async(req,res)=>{
 const post=await Post.findById(req.params.id);

 if(post.author.toString()!==req.user.id)
  return res.status(403).json({message:"Not allowed"});

 await post.deleteOne();
 res.json({message:"Deleted"});
};