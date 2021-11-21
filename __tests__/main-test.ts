import "cdktf/lib/testing/adapters/jest"; // Load types for expect matchers
import { Testing } from "cdktf";
import { MyStack } from "../my-stack";
// import { Instance } from "../.gen/providers/aws/ec2";

describe("インフラを構築する", () => {
  it("Validなスタックが作成される", () => {
    const app = Testing.app();
    const stack = new MyStack(app, "test");

    expect(Testing.fullSynth(stack)).toBeValidTerraform();
  });

  // it("t2.microのEC2インスタンスが作成される", () => {
  //   const app = Testing.app();
  //   const stack = new MyStack(app, "test");

  //   expect(Testing.fullSynth(stack)).toHaveResource(Instance);
  // });
});
