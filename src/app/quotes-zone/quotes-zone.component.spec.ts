import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesZoneComponent } from './quotes-zone.component';

describe('QuotesZoneComponent', () => {
  let component: QuotesZoneComponent;
  let fixture: ComponentFixture<QuotesZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
