import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDtoComponent } from './ticket-dto.component';

describe('TicketDtoComponent', () => {
  let component: TicketDtoComponent;
  let fixture: ComponentFixture<TicketDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketDtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
