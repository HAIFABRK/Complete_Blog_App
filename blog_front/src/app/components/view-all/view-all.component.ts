import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css'] // Notice it's style**Urls** not style**Url**
})
export class ViewAllComponent implements OnInit {

  allPosts: any[] = []; // Initialize as an array

  constructor(private postService: PostService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    console.log('ngOnInit called in ViewAllComponent');
    this.getAllPosts();
  }

  getAllPosts() {
    console.log('getAllPosts called');  // Check if this is logged
    this.postService.getAllPosts().subscribe(
      res => {
        console.log('Response received:', res);  // Check if this is logged
        this.allPosts = res;  // Assign the response to the allPosts variable
      },
      error => {
        console.error('Error:', error);  // Log the error details
        this.snackBar.open("Something Went Wrong !!", "OK");
      }
    );
  }
}
