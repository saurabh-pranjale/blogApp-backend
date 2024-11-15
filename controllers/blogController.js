const Blog = require('../models/blog')

exports.getBlogs = async (req, res) => {
    try {
        const blog = await Blog.find().populate('author','username')
        res.status(200).json(blog)
    } catch (error) {
        res.status(401).json({ message: error })
    }
}


exports.CreateBlogs = async (req, res) => {
    const { title, content } = req.body
    try {
        const blog = new Blog({ title, content, author: req.user.id })
        await blog.save()

        res.status(201).json({ message: "blog has been created 🔥", blog })
    } catch (error) {
        res.status(401).json({ message: error })
    }
}