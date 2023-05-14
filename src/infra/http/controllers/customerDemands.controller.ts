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

@Controller('customer/demand')
export class CustomerDemandsController {
  constructor(
    private createCustomerDemand: CreateCustomerDemand,
    private updateCustomerDemand: UpdateCustomerDemand,
    private deleteCustomerDemand: DeleteCustomerDemand,
    private listCustomerDemands: ListCustomerDemand,
    private findCustomerDemandById: FindCustomerDemandById,
  ) {}

  @Get()
  async findAll(@Body() customerId: string) {
    return await this.listCustomerDemands.execute(customerId)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.findCustomerDemandById.execute({ customerDemandId: id })
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
    if (!id || !updateCustomerDemandDTO.customerId) {
      throw new Error('Missing identifications')
    }

    await this.updateCustomerDemand.execute({
      customerDemandId: id,
      customerId: updateCustomerDemandDTO.customerId,
      customerDemand: {
        name: updateCustomerDemandDTO.name,
        description: updateCustomerDemandDTO.description,
        endLine: updateCustomerDemandDTO.endLine as string,
        designer: updateCustomerDemandDTO.designer,
        copywriter: updateCustomerDemandDTO.copywriter,
      },
    })
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Body() customerId: string) {
    await this.deleteCustomerDemand.execute({
      customerDemandId: id,
      customerId,
    })
  }
}
