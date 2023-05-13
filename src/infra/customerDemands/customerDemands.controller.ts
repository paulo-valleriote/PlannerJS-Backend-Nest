import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { CustomerDemandsService } from './customerDemands.service'
import { CreateCustomerDemandsDto } from './dto/create-customerDemand.dto/create-customerDemands.dto'
import { UpdateCustomerDemandsDto } from './dto/update-customerDemand.dto/update-customerDemands.dto'

@Controller('posts')
export class CustomerDemandsController {
  constructor(
    private readonly customerDemandsService: CustomerDemandsService,
  ) {}

  @Get()
  async findAll() {
    return await this.customerDemandsService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.customerDemandsService.findOne(id)
  }

  @Post()
  async create(@Body() createCustomerDemandDTO: CreateCustomerDemandsDto) {
    await this.customerDemandsService.create(createCustomerDemandDTO)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDemandDTO: UpdateCustomerDemandsDto,
  ) {
    await this.customerDemandsService.update(id, updateCustomerDemandDTO)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.customerDemandsService.remove(id)
  }
}
