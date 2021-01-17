import { gql } from "apollo-server";

export const postTypeDefs = gql`
	type Post {
		id: ID!
		title: String!
		content: String!
	}
	
    input PostInput {
        content: String
        title: String
    }

	extend type Query {
        posts: [Post]
		post(id: ID!): Post!
	}

	extend type Mutation {
		createPost(postInput: PostInput): Post
        updatePost(id: ID!, postInput: PostInput): Post
		deletePost(id: ID!): Post
	}
`;
