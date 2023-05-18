import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { CreateCustomerDto } from './../dtos/customers/create-customer.dto/create-customer.dto'
import { UpdateCustomerDto } from './../dtos/customers//update-customer.dto/update-customer.dto'
import { CreateCustomer } from 'src/app/use-cases/Customer/create-customer'
import { UpdateCustomer } from 'src/app/use-cases/Customer/update-customer'
import { DeleteCustomer } from 'src/app/use-cases/Customer/delete-customer'
import { ListCustomer } from 'src/app/use-cases/Customer/list-customer'
import { FindCustomerById } from 'src/app/use-cases/Customer/find-customer-by-id'

@Controller('customers')
export class CustomersController {
  constructor(
    private createCustomer: CreateCustomer,
    private updateCustomer: UpdateCustomer,
    private deleteCustomer: DeleteCustomer,
    private listCustomers: ListCustomer,
    private findCustomerById: FindCustomerById,
  ) {}

  @Get()
  async listAll() {
    return this.listCustomers.execute()
  }

  @Get(':id')
  async listOne(@Param('id') id: string) {
    return this.findCustomerById.execute(id)
  }

  @Post('')
  async create(@Body() createCustomerDTO: CreateCustomerDto) {
    this.createCustomer.execute(createCustomerDTO)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDTO: UpdateCustomerDto,
  ) {
    this.updateCustomer.execute({ id, customer: updateCustomerDTO })
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    this.deleteCustomer.execute(id)
  }
}
