import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHomeTextComponent } from './banner-home-text.component';

describe('BannerHomeTextComponent', () => {
  let component: BannerHomeTextComponent;
  let fixture: ComponentFixture<BannerHomeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerHomeTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerHomeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
