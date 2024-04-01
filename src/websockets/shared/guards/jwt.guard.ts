import { jwtConfig } from "@config"
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { UnauthorizedWsException } from "../exceptions"
@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    async canActivate(context: ExecutionContext) {
        const event = context.switchToWs().getPattern()
        const data = context.switchToWs().getData()
        const client = context.switchToWs().getClient()
        
        const token = client.handshake?.auth?.token
        console.log(client.handshake?.auth)
        if (!token) throw UnauthorizedWsException({event, data})
        try{
            const user = await this.jwtService.verifyAsync(token, {
                ignoreExpiration: false,
                secret: jwtConfig().secret,
            })

            context.switchToWs().getClient().user = user
            return true
        } catch (ex) {
            throw UnauthorizedWsException({event, data})
        }
    }
}
