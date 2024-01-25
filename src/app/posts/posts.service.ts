import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get<{ message: string; posts: any }>(
        'http://localhost:3000/api/posts'
      ).pipe(
        map(data =>{
         return data.posts.map((post: any) =>{
            return {
              id: post._id,
              title: post.title,
              content: post.content
            }
          })
        })
      )
      .subscribe(mappedPosts => {
        this.posts = mappedPosts;
        console.log(`les posts : ${JSON.stringify(this.posts)}`);
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { id: 'null', title: title, content: content };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/posts', post)
      .subscribe((data) => {
        console.log(data.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }
}
