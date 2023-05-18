import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers

    if (!authorization) {
      throw new BadRequestException('Authorization was not provided')
    }

    const token = authorization.split(' ')[1]

    if (!verify(token, 'secretKey')) {
      throw new ForbiddenException('Invalid token, authentication fail')
    }

    next()
  }
}
