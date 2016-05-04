import {default as CounterComponent} from "./counter";

describe('CounterComponent', () => {
  let component;

  beforeEach(() => {
    component = CounterComponent(5); 
  });

  it('should initialize the counter to 0', () => {
    component = CounterComponent(); 
    expect(component.count).toEqual(0);
  });

  it('should initialize the counter to a value', () => {
    expect(component.count).toEqual(5)
  });

  it('should increment the counter', () => {
    spyOn(component.stream, 'onNext');
    component.increment();
    expect(component.stream.onNext).toHaveBeenCalledWith(6);
  });
});
