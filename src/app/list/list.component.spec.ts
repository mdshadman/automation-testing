import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component, fixture);
    expect(component).toBeTruthy();
  });
});

/*this is for testing two aspects at the same time */
describe('outcomeResult', () => {
  const component =  new ListComponent();
  it ('should return 0 if input is positive', () => {
    console.log(this);
    component.number = -1;
    const result = component.outcomeResult();
    expect(result).toBe(0);
  });
  it ('should increment the input if it is positive', () => {
    component.number = 3;
    const result = component.outcomeResult();
    expect(result).toBe(4);
  });
  });
  /*this is for Array */
  describe('getCurrencies', () => {
    const component =  new ListComponent();
    it('it should contain currencies if present', () => {
  const result = component.getCurrencies();
  expect(result).toContain('USD');
  expect(result).toContain('AUD');
  expect(result).toContain('EUR');
    });
  });
  /*this is for string */
  describe('greet', () => {
    const component =  new ListComponent();
   it('it should greet before name', () => {
     expect(component.greet('mosh')).toContain('mosh');
   });
  });

describe('upVote', () => {
  let component: ListComponent;
beforeEach(() => {
component = new ListComponent();
});
it('it should increse the vote by 1', () => {
   component.upVote();
   expect(component.totalVotes).toBe(1);
});
it('should decrease vote by 1', () => {
  component.downVote();
  expect(component.totalVotes).toBe(-1);
});
});
