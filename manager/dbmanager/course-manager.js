const MongoClient = require('../../client/mongo-client'),
    { Course } = require('../../schemas/database/courses');

class CourseManager {
    constructor() {
        this.mongoClient = new MongoClient();
        this.mongoose = this.mongoClient.getConnection('mongopg');
    }

    async createNewCourse(courseData) {
        let courseSchema = this.mongoose.Schema({ Course })
        let CourseModel = this.mongoose.model('Course', courseSchema)
        let course = new CourseModel(courseData)
        await course.save()
    }
}