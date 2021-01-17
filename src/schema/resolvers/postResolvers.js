import { stripIgnoredCharacters } from "graphql";
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
    addComment: async (_, { postId, commentInput }) => {
      const post = await postModel.findById(postId);

      post.comments.push(commentInput);
      await post.save();

      return commentInput;
    },
  },
};
