import { Component, OnInit } from '@angular/core';
import { Image } from './image.model';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  imageList: Image[] = [
    {
      title: 'Dota 2',
      imageUrl: 'https://i.blogs.es/de368e/dota-2-wallpaper/1366_2000.jpg',
      description: 'Dota 2 es uno de los mejores juegos que existen en la actualidad.',
    },
    {
      title: 'League of Legends',
      imageUrl: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-2935d0a3e332decb8e727fe56789b6ab',
      description: 'League of Legends es otro popular juego MOBA.',
    },
    {
      title: 'Counter-Strike: Global Offensive',
      imageUrl: 'https://www.talkesport.com/wp-content/uploads/CSGO-14.jpg',
      description: 'CS:GO es un juego de disparos en primera persona.',
    }
    // Agrega más imágenes aquí
  ];

  ngOnInit() {
    // Código de inicialización, si es necesario
  }
}
