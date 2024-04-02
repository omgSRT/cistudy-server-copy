import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from "@nestjs/common"
import { AuthManagerService } from "@global"
import { Observable, mergeMap } from "rxjs"
import { AuthTokenType, Payload, Output, getClientId } from "@common"
import { GqlExecutionContext } from "@nestjs/graphql"

@Injectable()
export class AuthInterceptor<T extends object>
implements NestInterceptor<T, Output<T>>
{
    constructor(
        private readonly authManagerService: AuthManagerService) {}

    async intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Promise<Observable<Output<T>>> {
        const gqlContext = GqlExecutionContext.create(context).getContext()
        const request = gqlContext.req

        const { userId, type } = request.user as Payload

        const clientId = getClientId(request.headers)
        const refresh = type === AuthTokenType.Refresh

        if (refresh) {
            await this.authManagerService.validateSession(userId, clientId)
        }

        return next.handle().pipe(
            mergeMap(async (data) => {
                return await this.authManagerService.generateOutput<T>(
                    userId,
                    data,
                    refresh,
                    clientId,
                )
            }),
        )
    }
}
