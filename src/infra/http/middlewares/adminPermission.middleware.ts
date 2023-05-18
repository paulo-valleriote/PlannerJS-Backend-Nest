import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class AdminPermissionMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const { admin } = req.body
    const userHasAdminPermission = admin

    if (!userHasAdminPermission) {
      throw new ForbiddenException(
        'You do not have permission to access this resource',
      )
    }

    next()
  }
}
