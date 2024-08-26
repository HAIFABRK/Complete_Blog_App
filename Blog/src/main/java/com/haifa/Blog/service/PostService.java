package com.haifa.Blog.service;

import com.haifa.Blog.entity.Post;

import java.util.List;

public interface PostService  {
    Post savePost(Post post);
    List<Post> getAllPosts();
}
