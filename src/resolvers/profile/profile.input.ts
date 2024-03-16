import { AuthEmptyDataInput, AuthInput, OptionsOnly } from "@common"
import { Field, InputType, Int } from "@nestjs/graphql"


@InputType()
export class FindManySelfCreatedCoursesInputOptions {
    @Field(() => Int, { nullable: true })
        take?: number
    @Field(() => Int, { nullable: true })
        skip?: number
}

@InputType()
export class FindManySelfCreatedCoursesInputData implements OptionsOnly<FindManySelfCreatedCoursesInputOptions>{
    @Field(() => FindManySelfCreatedCoursesInputOptions, { nullable: true })
        options?: FindManySelfCreatedCoursesInputOptions
}

export class FindManySelfCreatedCoursesInput
implements AuthInput<FindManySelfCreatedCoursesInputData>
{
    userId: string
    data: FindManySelfCreatedCoursesInputData
}

export class FindManySelfCreatedCoursesMetadataInput implements AuthEmptyDataInput {
    userId: string
}


@InputType()
export class FindManyEnrolledCoursesInputOptions {
    @Field(() => Int, { nullable: true })
        take?: number
    @Field(() => Int, { nullable: true })
        skip?: number
}

@InputType()
export class FindManyEnrolledCoursesInputData implements OptionsOnly<FindManyEnrolledCoursesInputOptions> {
    @Field(() => FindManyEnrolledCoursesInputOptions, { nullable: true })
        options?: FindManyEnrolledCoursesInputOptions
}

export class FindManyEnrolledCoursesInput
implements AuthInput<FindManyEnrolledCoursesInputData>
{   
    userId: string
    data: FindManyEnrolledCoursesInputData
}
