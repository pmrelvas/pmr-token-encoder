import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-encoder-decoder',
  templateUrl: './token-encoder-decoder.component.html',
  styleUrls: ['./token-encoder-decoder.component.scss']
})
export class TokenEncoderDecoderComponent implements OnInit {

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
