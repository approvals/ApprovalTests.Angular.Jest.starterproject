import {describe, expect} from "@jest/globals";
import {printArray} from "approvals/lib//Utilities/Printers";
import {verify} from "approvals/lib/Providers/Jest/JestApprovals";

describe('ApprovalsStuff', () => {
  it('should approve', () => {
    expect("5").toBe("5");
  });

  it('should approve with approvals', () => {
    let actual = printArray("", ["Lada", "Pedro", "Llewellyn"]);
    expect(actual).toMatchSnapshot();
  });

  it('should approve with approvals for reals', () => {
    verify('foo');
  });
});
