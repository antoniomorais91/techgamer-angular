import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHomeText2Component } from './banner-home-text2.component';

describe('BannerHomeText2Component', () => {
  let component: BannerHomeText2Component;
  let fixture: ComponentFixture<BannerHomeText2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerHomeText2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerHomeText2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
