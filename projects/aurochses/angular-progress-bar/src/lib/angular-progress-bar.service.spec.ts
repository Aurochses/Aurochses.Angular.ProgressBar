import { TestBed, inject } from '@angular/core/testing';

import { AngularProgressBarService } from './angular-progress-bar.service';

describe('AngularProgressBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularProgressBarService]
    });
  });

  it('should be created', inject([AngularProgressBarService], (service: AngularProgressBarService) => {
    expect(service).toBeTruthy();
  }));
});
