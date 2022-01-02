import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly mobileNumber: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly created_at: Date;

  @ApiProperty()
  readonly modified_at: Date;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly phone: string;
}
