import h from "virtual-dom/h";
import {default as VDomObserver} from "./virtual-dom-observer";

describe('VDomObserver', () => {
  let fake, observer;

  beforeEach(() => {
    fake = {
      render: function() { }
    };

    spyOn(fake, 'render').and.returnValue(h());
    observer = VDomObserver(fake.render);
  });

  it('should call render on initialization', () => {
    expect(fake.render).toHaveBeenCalled();
  });

  it('should call render onNext', () => {
    observer.onNext();
    expect(fake.render).toHaveBeenCalled();
  });

});
