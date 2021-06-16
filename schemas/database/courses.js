const Course = {
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now()
    },
    isPublished: Boolean
}

module.exports = {
    Course,
}