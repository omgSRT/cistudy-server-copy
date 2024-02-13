import { IOutput, AuthTokens } from "@common"
import { UserMySqlEntity } from "@database"
import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class FindProfileByAuthTokenOutput
implements IOutput<UserMySqlEntity>
{
  @Field(() => UserMySqlEntity)
      data: UserMySqlEntity
  @Field(() => AuthTokens, { nullable: true })
      tokens: AuthTokens
}