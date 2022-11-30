import React from 'react';
import {Box} from "@mui/material";
import AddPost from './AddPost';
import { IPost } from '../../../types';
import Posts from './Posts';
import { initialPosts } from './InitialPosts';

const Home = () => {
  const [posts, setPosts] = React.useState<IPost[]>(initialPosts);

  return (
    <Box>
      <AddPost setPosts={setPosts} />
      <Posts posts={posts} />
    </Box>
  );
};

export default Home;