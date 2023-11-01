// import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFirestoreCollection, AngularFirestoreDocument } from 'firebase/firestore';

// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Post } from './post';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {
//   postsCollection: AngularFirestoreCollection<Post>;
//   postDoc: AngularFirestoreDocument<Post>;

//   constructor(private afs: AngularFirestore) {
//     this.postsCollection = this.afs.collection('posts', ref =>
//       ref.orderBy('published', 'desc')
//     );
//   }

//   getPosts(): Observable<Post[]> {
//     return this.postsCollection.snapshotChanges().pipe(
//       map(actions => {
//         return actions.map(a => {
//           const data = a.payload.doc.data() as Post;
//           const id = a.payload.doc.id;
//           return { id, ...data };
//         });
//       })
//     );
//   }

//   getPostData(id: string): Observable<Post> {
//     this.postDoc = this.afs.doc<Post>(`posts/${id}`);
//     return this.postDoc.valueChanges();
//   }

//   getPost(id: string): AngularFirestoreDocument<Post> {
//     return this.afs.doc<Post>(`posts/${id}`);
//   }

//   create(data: Post): void {
//     this.postsCollection.add(data);
//   }

//   delete(id: string): Promise<void> {
//     return this.getPost(id).delete();
//   }

//   update(id: string, formData: any): Promise<void> {
//     return this.getPost(id).update(formData);
//   }
// }
export class PostService{}
