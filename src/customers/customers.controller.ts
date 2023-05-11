import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { CustomersService } from './customers.service'
import { CreateCustomerDto } from './dto/create-customer.dto/create-customer.dto'
import { UpdateCustomerDto } from './dto/update-customer.dto/update-customer.dto'

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  async listAll() {
    return this.customersService.findAll()
  }

  @Get(':id')
  async listOne(@Param('id') id: string) {
    return this.customersService.findOne(id)
  }

  @Post()
  async create(@Body() createCustomerDTO: CreateCustomerDto) {
    return this.customersService.create(createCustomerDTO)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDTO: UpdateCustomerDto,
  ) {
    return this.customersService.update(id, updateCustomerDTO)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.customersService.delete(id)
  }
}
