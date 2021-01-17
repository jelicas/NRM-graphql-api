import { postModel } from "../../db/models/post.js";

export const postResolvers = {
  Query: {
    posts: async () => {
      const posts = await postModel.find();
      return posts;
    },
    post: async (_, { id }) => {
      const post = await postModel.findById(id);
      return post;
    },
  },
  Mutation: {
    createPost: async (_, { postInput }) => {
      const post = new postModel(postInput);
      await post.save();
      return post;
    },
    updatePost: async (_, { id, postInput }) => {
      const post = await postModel.findByIdAndUpdate(id, postInput);
      return post;
    },
    deletePost: async (_, { id }) => {
      const post = await postModel.findByIdAndDelete(id);
      return post;
    },
  },
};
