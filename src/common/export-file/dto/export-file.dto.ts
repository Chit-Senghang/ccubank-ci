import { ArrayMinSize, IsArray, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ColumnDefinitionDto } from './column-definition.dto';

export class ExportFileDto {
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ColumnDefinitionDto)
  headers: ColumnDefinitionDto[];

  @IsOptional()
  @IsArray()
  storeIds: number[];
}
