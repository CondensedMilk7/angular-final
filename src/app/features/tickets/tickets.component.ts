import { Component, OnInit, inject, signal } from '@angular/core';
import { GamesFirebaseService } from '../../shared/services/GamesFirebase.service';
import { Game } from '../../types/game';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent implements OnInit {
  private gameService = inject(GamesFirebaseService);
  gamesSig = signal<Game[]>([]);
  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      this.gamesSig.set(games);
    });
  }
}
