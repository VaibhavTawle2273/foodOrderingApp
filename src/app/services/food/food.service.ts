import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService{

  constructor() { }

  getAll: string[]{
    return[
        '/assets/image-1.jpeg',
        '/assets/image-2.jpeg',
        '/assets/image-3.jpeg',
        '/assets/image-4.jpeg',
        '/assets/image-5.jpeg',
        '/assets/image-6.jpeg',
        '/assets/image-7.jpeg',
        '/assets/image-8.jpeg'
      ]
  }
}
