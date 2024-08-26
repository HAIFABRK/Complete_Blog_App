import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css'
})
export class ViewPostComponent {

    postId = this.activatedRoute.snapshot.params['id'];
    postData: any;

    constructor(private postService: PostService,
      private activatedRoute: ActivatedRoute,
      private matSnackBar: MatSnackBar
    ){}

    ngOnInit(){
      console.log(this.postId);
      this.getPostById();
    }

    getPostById(){
      this.postService.getPostById(this.postId).subscribe(res =>{
        this.postData = res;
        console.log(res);
      }, error =>{
        console.error('Error fetching post:', error);

        this.matSnackBar.open("something went wrong !!!" , "OK")
      } );
    }
}
