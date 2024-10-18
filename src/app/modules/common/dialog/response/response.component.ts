import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: [],
  standalone: true,
  imports: [MatIconModule],
})
export class ResponseComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  message!: string;
  icon!: string;

  ngOnInit(): void {
    this.message = this.data.message;
    this.icon = this.data.icon;
  }
}
