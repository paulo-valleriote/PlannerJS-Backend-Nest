import { NotFoundException } from '@nestjs/common'

export class EntityNotFound extends NotFoundException {
  constructor(entity: string) {
    super(`${entity} not found`)
  }
}
