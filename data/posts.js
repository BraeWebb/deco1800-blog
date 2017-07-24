var postsSchema = {
    id: String,
    title: String,
    content: String,
    author: String,
    date: Date,
    background: String,
    tags: [String]
};

module.exports = postsSchema;