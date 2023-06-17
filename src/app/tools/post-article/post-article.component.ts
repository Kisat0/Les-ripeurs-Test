import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent {
  public loader = false;
  public postId: number | null;

  constructor(private http: HttpClient) {}

  validateAndSubmit(title: string, content: string) {
    this.loader = true;
    if (title.length < 3 || title.length > 60) {
      alert("Le titre doit être compris en 3 et 60 caractères !!")
      return;
    }

    if (content.length < 30 || content.length > 600) {
      alert("Le contenu de l'article doit être compris entre 30 et 600 caractères !!")
      return;
    }

    const body = { userId: 3, title: title, body:content}

    this.http.post<any>('https://jsonplaceholder.typicode.com/posts', body).subscribe(
      data => {
        this.postId = data.id;
        this.loader = false;        
      },
      error => {
        console.error('An error occurred while submitting the form', error);
      }
    );
  }
}
