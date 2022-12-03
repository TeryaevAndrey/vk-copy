import React, { FC } from "react";
import { Avatar, Box, ImageList, ImageListItem } from "@mui/material";
import { IPost } from "../../../types";
import { Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { useAuth } from "../../providers/useAuth";
import { initialPosts } from "./InitialPosts";
import Card from "../../ui/Card";

const Posts: FC = () => {
  const { db } = useAuth();
  const [posts, setPosts] = React.useState<IPost[]>(initialPosts);

  React.useEffect(() => {
    const unsub = onSnapshot(collection(db, "posts"), (doc) => {
      doc.forEach((d: any) => {
        setPosts(prev => [...prev, d.data()]);
      })
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      {posts.map((post, index) => (
        <Card key={index}>
          <Link
            key={post.author._id}
            to={`/profile/${post.author._id}`}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#111",
              marginBottom: 12,
            }}
          >
            <Box
              sx={{
                display: "flex",
                position: "relative",
                marginRight: 2,
                width: 50,
                height: 50,
                gap: 2,
              }}
            >
              <Avatar
                src={post.author.avatar}
                alt="user"
                sx={{ width: 46, height: 46, borderRadius: "50%" }}
              />
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div style={{ fontSize: 14, width: "max-content" }}>
                  {post.author.name}
                </div>
                <div
                  style={{ fontSize: 14, opacity: 0.6, width: "max-content" }}
                >
                  {post.createdAt}
                </div>
              </div>
            </Box>
          </Link>

          <p>{post.content}</p>

          {post?.images?.length && (
            <ImageList variant="masonry" cols={3} gap={8}>
              {post.images.map((image) => (
                <ImageListItem key={image}>
                  <img src={image} alt="postImg" loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Card>
      ))}
    </>
  );
};

export default Posts;
