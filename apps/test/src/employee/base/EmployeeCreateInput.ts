/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EmployeeCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  birthdate!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  lastName!: string;
}

export { EmployeeCreateInput as EmployeeCreateInput };
