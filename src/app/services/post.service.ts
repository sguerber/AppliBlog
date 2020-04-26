import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  posts: Post[] = [
    {
      title:'monTitre',
      content:'monContenu',
      loveIts:0,
      created_at:new Date()
    }
  ];
  postsSubject = new Subject<Post[]>();
  
  // On récupère la liste de posts mise à jour au démarrage de l'application
  constructor (private httpClient: HttpClient) 
  {
  }

  // Méthode mettant à jour la liste des posts
  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  // Méthode pour créer un nouveau post
  createNewPost(title: string, content: string) {
    console.log("on va push");
    const newPost = new Post(title, content);
    this.posts.push(newPost);
    console.log("push ok");
    this.emitPosts();
  }
  
  // Méthode qui supprime un post 
  deletePost(i:number) {
    
    this.posts.splice(i, 1);
    this.emitPosts();
  }

  ajoutLike(i:number)
  {
    this.posts[i].loveIts=this.posts[i].loveIts+1;
    this.emitPosts();
  }

  retraitLike(i:number)
  {
    this.posts[i].loveIts=this.posts[i].loveIts-1;
    this.emitPosts();
  }

  getColor(i:number)
  {
   
    if(this.posts[i].loveIts <0 ) {
      return 'red';
    }
    else if (this.posts[i].loveIts>0)
    {
      return 'green';
    }
    else
    {
      return 'black';
    }
  }
  
}