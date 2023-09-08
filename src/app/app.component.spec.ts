import { describe, expect } from "@jest/globals";
import {verify} from "approvals/lib/Providers/Jest/JestApprovals";

describe('ApprovalsStuff', () => {

  it('should approve', () => {
    expect("5").toBe("5");
  });

  it('should approve with approvals', () => {
    verify('foo');
  });
});
