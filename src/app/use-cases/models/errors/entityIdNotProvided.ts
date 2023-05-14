import { BadRequestException } from '@nestjs/common'

export class EntityIdNotProvidedError extends BadRequestException {
  constructor(entity: string) {
    super(`${entity} ID was not provided`)
  }
}
