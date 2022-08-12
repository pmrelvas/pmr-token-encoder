import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenEncoderDecoderComponent } from './token-encoder-decoder.component';

describe('TokenEncoderDecoderComponent', () => {
  let component: TokenEncoderDecoderComponent;
  let fixture: ComponentFixture<TokenEncoderDecoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenEncoderDecoderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenEncoderDecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
