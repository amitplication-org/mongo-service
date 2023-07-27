import * as graphql from "@nestjs/graphql";
import { SomeThingResolverBase } from "./base/someThing.resolver.base";
import { SomeThing } from "./base/SomeThing";
import { SomeThingService } from "./someThing.service";

@graphql.Resolver(() => SomeThing)
export class SomeThingResolver extends SomeThingResolverBase {
  constructor(protected readonly service: SomeThingService) {
    super(service);
  }
}
