const { Comment, Like, Post, Profile, User } = require("./models/index");

User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.hasOne(Post);

User.hasMany(Like);
Like.belongsTo(User);

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}