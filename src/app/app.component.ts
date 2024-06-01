import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit,inject } from '@angular/core';
import { Database,ref,set,onValue } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JsonPipe, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-final';
  private db: Database = inject(Database);
  data: any = [];
team:string = '';
  ngOnInit() {
   
    const dbRef = ref(this.db, `sports/volleyball/${this.team}/players`);
    onValue(dbRef, (snapshot) => {
      const firebaseData = snapshot.val();
     
      if (firebaseData) {
        this.data = Object.values(firebaseData);
      }
    });
  } 
}