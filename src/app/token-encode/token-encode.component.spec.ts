import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenEncodeComponent } from './token-encode.component';

describe('TokenEncoderDecoderComponent', () => {
  let component: TokenEncodeComponent;
  let fixture: ComponentFixture<TokenEncodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenEncodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenEncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
