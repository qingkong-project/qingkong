import { Crud, CrudController } from "@nestjsx/crud";
// import { CodeHouse } from '../entities/code-house.entity'
// import { CodeHouseCrudService } from '../service/crud/code-house.crud.service'
import { Controller } from "@nestjs/common";
import { Note } from "../entities/note.entity";
import { NoteCrudService } from "../service/crud/note.crud.service";
import { Star } from "../entities/star.entity";
import { StarCrudService } from "../service/crud/star.crud.service";
import { Public } from "../../role/decorator/public.decorator";

@Public()
@Crud({
  model: {
    type: Star,
  },
})
@Controller('star')
export class StarController implements CrudController<Star> {
  constructor(public service: StarCrudService) {}
}
