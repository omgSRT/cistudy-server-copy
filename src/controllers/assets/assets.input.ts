import { IInput } from "@common"
import { ApiProperty } from "@nestjs/swagger"

export class GetInput implements IInput<string>  {
  @ApiProperty()
  	data: string
}