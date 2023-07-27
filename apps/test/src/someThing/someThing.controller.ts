import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SomeThingService } from "./someThing.service";
import { SomeThingControllerBase } from "./base/someThing.controller.base";

@swagger.ApiTags("someThings")
@common.Controller("someThings")
export class SomeThingController extends SomeThingControllerBase {
  constructor(protected readonly service: SomeThingService) {
    super(service);
  }
}
