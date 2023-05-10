import { Injectable, NotFoundException } from '@nestjs/common'
import { CustomerDemand } from './entities/customerDemands.entity'

@Injectable()
export class CustomerDemandsService {
  private customerDemand: CustomerDemand[] = [
    {
      id: '1',
      customerId: '1',
      name: 'Post 1',
      description: 'Post 1 caption',
      createdAt: new Date(),
      endLine: new Date('20/12/2023'),
      designer: 'John Doe',
      copywriter: 'John Doe',
      readyToSend: false,
      readyToPost: false,
      posted: false,
    },
  ]

  async findAll() {
    return this.customerDemand
  }

  async findOne(id: string) {
    const post = this.customerDemand.find((post) => post.id === id)

    if (!post) {
      throw new NotFoundException(`Post ID ${id} not found`)
    }

    return post
  }

  async create(createPostDTO: any) {
    this.customerDemand.push(createPostDTO)
  }

  async update(id: string, updatePostDTO: any) {
    const postIndex = this.customerDemand.findIndex((post) => post.id === id)

    this.customerDemand[postIndex] = updatePostDTO
  }

  async remove(id: string) {
    const postIndex = this.customerDemand.findIndex((post) => post.id === id)

    if (postIndex >= 0) this.customerDemand.splice(postIndex, 1)
  }
}
