import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: Date;
  @Input() postLoveIts: number=0;
  @Input() index: number;
  @Input() id: number;
  

  constructor(private postService: PostService) { }

  ngOnInit() { 
  }

  getColor()
  {
   
    if(this.postLoveIts <0 ) {
      return 'red';
    }
    else if (this.postLoveIts>0)
    {
      return 'green';
    }
    else
    {
      return 'black';
    }
  }

  ajoutLike()
  {
    this.postLoveIts= this.postLoveIts+1;
    console.log('+1 like !' +' loveIts : ' + this.postLoveIts);
    
  }

  onDeletePost()
  {
    this.postService.deletePost(this.index);
  }

  retraitLike()
  {
    /*
    const postIndexToRetraitLike = this.posts.findIndex(
    (postEl) => {
        if(postEl === post) {
        return true;
        }
    }
    );
    */
   this.postLoveIts= this.postLoveIts-1;
    console.log('-1 like !' +' loveIts : ' + this.postLoveIts);
    /*
    this.savePosts();
    this.emitPosts();
    */
  }

  /*

  onAjoutLike()
  {
    this.postService.ajoutLike();
  }

  onRetraitLike()
  {
    this.postService.retraitLike();
  }

  onGetColor()
  {
    this.postService.getColor();
  }
  */

}

