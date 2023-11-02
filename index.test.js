const { Comment, Like, Post, Profile, User } = require("./index");

const userSeed = require('./seed/users.json');
const profileSeed = require('./seed/profiles.json');
const postSeed = require('./seed/posts.json');
const commentSeed = require('./seed/comments.json');
const likeSeed = require('./seed/likes.json');

const { sequelize } = require('./db/connection.js');

beforeAll(async () => {
    await sequelize.sync({ force: true });
    
    await User.bulkCreate(userSeed);
    await Profile.bulkCreate(profileSeed);
    await Post.bulkCreate(postSeed);
    await Comment.bulkCreate(commentSeed);
    await Like.bulkCreate(likeSeed);
});

afterAll(async () => {
    await sequelize.close();
});


describe('Database Connection', () => {
    test('connects to the database and syncs models', async () => {
        expect(User).toBeDefined();
        expect(Profile).toBeDefined();
        expect(Post).toBeDefined();
        expect(Comment).toBeDefined();
        expect(Like).toBeDefined();
    });
});

describe('Associations', () => {
    test('verify associations are set up correctly', async () => {
        const associatedProfile = await User.findOne({ include: Profile });
        expect(associatedProfile).toHaveProperty('Profile');
        
        const associatedPosts = await User.findOne({ include: Post });
        expect(associatedPosts).toHaveProperty('Posts');
        
        const associatedComments = await Post.findOne({ include: Comment });
        expect(associatedComments).toHaveProperty('Comments');
        
        const associatedLikes = await User.findOne({ include: Like });
        expect(associatedLikes).toHaveProperty('Likes');
    });
});