package com.haifa.Blog.service;

import com.haifa.Blog.entity.Post;

import java.util.List;

public interface PostService  {
    Post savePost(Post post);
    List<Post> getAllPosts();
    Post getPostById(Long postId);
    void likePost(Long postId);
}
