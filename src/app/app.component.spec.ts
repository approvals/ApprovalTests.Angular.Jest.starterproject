import { describe, expect } from "@jest/globals";
import { verify } from "approvals/lib/Providers/Jest/JestApprovals";
import { Options } from "approvals/lib/Core/Options";
import { AppComponent } from "./app.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ApprovalsStuff', () => {

  it('should approve', () => {
    expect("5").toBe("5");
  });

  it('should approve with approvals', () => {
    verify('foo');
  });
});

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      // ... any other necessary modules or providers
    })
    .compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the expected HTML', () => {
    const compiled = fixture.debugElement.nativeElement;
    const htmlContent = compiled.outerHTML;
    // Your test assertion. For instance:
    const options = new Options().forFile().withFileExtention(".html")
    verify(htmlContent, options);    
  });
});
