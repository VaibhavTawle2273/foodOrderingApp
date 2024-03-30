import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService{

  constructor() { }

  getAll():Foods[]{
    return[ 
      {
        id: 1,
        name: "Pizza pepperoni",
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food-1.jpeg',
        tags: ['FastFoos', 'Pizza' , 'Lunch']
      },
      {
        id:2,
        name: "Pizza pepperoni",
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food-2.jpeg',
        tags: ['FastFoos', 'Pizza' , 'Lunch']
      },
      {
        id:3,
        name: "Pizza pepperoni",
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food-3.jpeg',
        tags: ['FastFoos', 'Pizza' , 'Lunch']
      },
      {
        id:4,
        name: "Pizza pepperoni",
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food-4.jpeg',
        tags: ['FastFoos', 'Pizza' , 'Lunch']
      },
      {
        id:5,
        name: "Pizza pepperoni",
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food-5.jpeg',
        tags: ['FastFoos', 'Pizza' , 'Lunch']
      },
      {
        id:6,
        name: "Pizza pepperoni",
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpeg',
        tags: ['FastFoos', 'Pizza' , 'Lunch']
      },
      {
        id:7,
        name: "Pizza pepperoni",
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food-7.jpeg',
        tags: ['FastFoos', 'Pizza' , 'Lunch']
      },
      {
        id:8,
        name: "Pizza pepperoni",
        price: 9,
        cookTime: '40-50',
        favorite: true,
        origins: ['Italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food-8.jpeg',
        tags: ['FastFoos', 'Pizza' , 'Lunch']
      },
      {
        id:9,
        name: "Pizza pepperoni",
        price: 9,
        cookTime: '40-50',
        favorite: true,
        origins: ['Italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food-9.jpeg',
        tags: ['FastFoos', 'Pizza' , 'Lunch']
      },
      {
        id:10,
        name: "Pizza pepperoni",
        price: 9,
        cookTime: '40-50',
        favorite: true,
        origins: ['Italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food-10.jpeg',
        tags: ['FastFoos', 'Pizza' , 'Lunch']
      }
    ];
    
  }
}

