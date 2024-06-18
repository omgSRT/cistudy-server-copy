import { AuthOutput, AuthTokens, Output } from "@common";
import { IsUUID } from "class-validator";

export class VerifyCourseOuputOther {
    courseId : string
}

export class VerifyCourseOuput implements Output<VerifyCourseOuputOther>{
    message: string;
    others : VerifyCourseOuputOther
}

export class CreateAccountReviewOutputOthers {
    @IsUUID("4")
    accountReviewId : string
}

export class CreateAccountReviewOutput implements Output<CreateAccountReviewOutputOthers>{
    message: string;
    others?: CreateAccountReviewOutputOthers;
}