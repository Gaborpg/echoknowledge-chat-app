import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotCompareComponent } from './bot-compare.component';

describe('BotCompareComponent', () => {
  let component: BotCompareComponent;
  let fixture: ComponentFixture<BotCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotCompareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
