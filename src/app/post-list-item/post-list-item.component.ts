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

  

  onAjoutLike()
  {
    this.postService.ajoutLike(this.index);
  }

  onRetraitLike()
  {
    this.postService.retraitLike(this.index);
  }

  onDeletePost()
  {
    this.postService.deletePost(this.index);
  }

  onGetColor()
  {
    this.postService.getColor(this.index);
  }
  

}

