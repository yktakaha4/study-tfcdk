import { Construct } from "constructs";
import { TerraformOutput, TerraformStack } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws";
import { Instance } from "./.gen/providers/aws/ec2";
import { DataAwsSsmParameter } from "./.gen/providers/aws/ssm";

export class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "ap-northeast-1",
    });

    const ami = new DataAwsSsmParameter(this, "ami", {
      name: "/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2",
    });

    const instance = new Instance(this, "compute", {
      ami: ami.value,
      instanceType: "t2.micro",
    });

    new TerraformOutput(this, "public_ip", {
      value: instance.publicIp,
    });
  }
}
