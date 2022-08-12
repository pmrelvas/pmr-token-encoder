import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-encode',
  templateUrl: './token-encode.component.html',
  styleUrls: ['./token-encode.component.scss']
})
export class TokenEncodeComponent implements OnInit {

  username: string = '';
  password: string = '';
  encodedToken: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onEncodeClick(): void {
    const basicToken = btoa(`${this.username}:${this.password}`);
    this.encodedToken = `Basic ${basicToken}`;
  }

}
