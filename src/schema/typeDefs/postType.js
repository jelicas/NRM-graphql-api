import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    userID: ID!
    comments: [Comment]
  }

  type Comment {
    content: String!
    userID: ID!
  }

  input PostInput {
    content: String
    title: String
    user_id: ID
  }

  input CommentInput {
    content: String
    user_id: ID
  }

  extend type Query {
    posts: [Post]
    post(id: ID!): Post!
  }

  extend type Mutation {
    createPost(postInput: PostInput): Post
    updatePost(id: ID!, postInput: PostInput): Post
    deletePost(id: ID!): Post
    addComment(postId: ID!, commentInput: CommentInput): Comment
  }
`;
