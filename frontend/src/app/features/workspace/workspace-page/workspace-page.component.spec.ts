import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspacePageComponent } from './workspace-page.component';

describe('WorkspacePageComponent', () => {
  let component: WorkspacePageComponent;
  let fixture: ComponentFixture<WorkspacePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkspacePageComponent]
    });
    fixture = TestBed.createComponent(WorkspacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
