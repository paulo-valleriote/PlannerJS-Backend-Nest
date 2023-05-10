import { Test, TestingModule } from '@nestjs/testing'
import { CustomerDemandsController } from './customerDemands.controller'

describe('PostsController', () => {
  let controller: CustomerDemandsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerDemandsController],
    }).compile()

    controller = module.get<CustomerDemandsController>(
      CustomerDemandsController,
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
