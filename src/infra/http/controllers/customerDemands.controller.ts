import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { UpdateCustomerDemandsDto } from './../dtos/customerDemands/update-customerDemand.dto/update-customerDemands.dto'
import { CreateCustomerDemandsDto } from './../dtos/customerDemands/create-customerDemand.dto/create-customerDemands.dto'
import { CreateCustomerDemand } from 'src/app/use-cases/CustomerDemand/create-customer-demand'
import { UpdateCustomerDemand } from 'src/app/use-cases/CustomerDemand/update-customer-demand'
import { DeleteCustomerDemand } from 'src/app/use-cases/CustomerDemand/delete-customer-demand'
import { ListCustomerDemand } from 'src/app/use-cases/CustomerDemand/list-customer-demand'
import { FindCustomerDemandById } from 'src/app/use-cases/CustomerDemand/find-customer-demand-by-id'

@Controller('posts')
export class CustomerDemandsController {
  constructor(
    private createCustomerDemand: CreateCustomerDemand,
    private updateCustomerDemand: UpdateCustomerDemand,
    private deleteCustomerDemand: DeleteCustomerDemand,
    private listCustomerDemands: ListCustomerDemand,
    private findCustomerDemandById: FindCustomerDemandById,
  ) {}

  @Get()
  async findAll() {
    return await this.listCustomerDemands.execute()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.findCustomerDemandById.execute(id)
  }

  @Post()
  async create(@Body() createCustomerDemandDTO: CreateCustomerDemandsDto) {
    await this.createCustomerDemand.execute(createCustomerDemandDTO)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDemandDTO: UpdateCustomerDemandsDto,
  ) {
    await this.updateCustomerDemand.execute({
      id,
      customerDemand: updateCustomerDemandDTO,
    })
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.deleteCustomerDemand.execute(id)
  }
}
