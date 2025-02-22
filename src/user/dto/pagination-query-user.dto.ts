import { ApiPropertyOptional, OmitType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import {
  BasePaginationQueryDto,
  BasePaginationQueryProps
} from '../../common/dto/base-pagination-query.dto';

export class UserPaginationQueryDto extends OmitType(BasePaginationQueryDto, [
  BasePaginationQueryProps.ORDER_BY
] as const) {
  @ApiPropertyOptional()
  @IsOptional()
  orderBy: string;

  @ApiPropertyOptional()
  @IsOptional()
  roleId: number;

  @ApiPropertyOptional()
  @IsOptional()
  isSelfService: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  userId: number;
}
