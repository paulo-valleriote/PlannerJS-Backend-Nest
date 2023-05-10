import { Test, TestingModule } from '@nestjs/testing'
import { CustomerDemandsService } from './customerDemands.service'

describe('PostsService', () => {
  let service: CustomerDemandsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerDemandsService],
    }).compile()

    service = module.get<CustomerDemandsService>(CustomerDemandsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
