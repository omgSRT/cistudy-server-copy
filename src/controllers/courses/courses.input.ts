import { AuthEmptyDataInput, AuthInput, MediaType } from "@common"
import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNumber, IsOptional, IsUUID, Length, Max, Min, max, min } from "class-validator"

export class CreateCourseInput implements AuthEmptyDataInput {
    @IsUUID("4")
    userId: string
}

export class EnrollCourseInputData {
    @IsUUID("4")
    @ApiProperty()
    courseId: string
    @ApiProperty()
    code: string
}

export class EnrollCourseInput implements AuthInput<EnrollCourseInputData> {
    data: EnrollCourseInputData
    @IsUUID("4")
    userId: string
}

export class CreateCourseTargetInputData {
    @IsUUID()
    @ApiProperty()
    courseId: string
    @ApiProperty()
    content: string
}

export class CreateCourseTargetInput
    implements AuthInput<CreateCourseTargetInputData> {
    @IsUUID("4")
    userId: string
    data: CreateCourseTargetInputData
}

export class UpdateCourseTargetInputData {
    @IsUUID()
    @ApiProperty()
    courseTargetId: string
    @ApiProperty({ nullable: true })
    content?: string
    @ApiProperty({ nullable: true })
    position?: number
}

export class UpdateCourseTargetInput
    implements AuthInput<UpdateCourseTargetInputData> {
    @IsUUID("4")
    userId: string
    data: UpdateCourseTargetInputData
}

export class UpdateCourseInputData {
    @IsUUID("4")
    @ApiProperty({ nullable: true })
    courseId: string

    @Length(20)
    @ApiProperty({ nullable: true })
    title?: string

    @Length(100)
    @ApiProperty({ nullable: true })
    description?: string

    @ApiProperty({ nullable: true })
    price?: number

    @ApiProperty({ nullable: true })
    discountPrice?: number

    @ApiProperty({ nullable: true })
    enableDiscount?: boolean

    @ApiProperty({ nullable: true })
    categoryId?: string

    @ApiProperty({ nullable: true })
    receivedWalletAddress?: string

    @ApiProperty({ nullable: true })
    subcategoryIds?: Array<string>

    @ApiProperty({ nullable: true })
    topicIds?: Array<string>

    @IsNumber()
    @ApiProperty({ nullable: true })
    thumbnailIndex?: number

    @IsNumber()
    @ApiProperty({ nullable: true })
    previewVideoIndex?: number
}

export class UpdateCourseInput implements AuthInput<UpdateCourseInputData> {
    @IsUUID("4")
    userId: string
    data: UpdateCourseInputData
    files: Array<Express.Multer.File>
}

export class DeleteCourseTargetInputData {
    @IsUUID()
    @ApiProperty()
    courseTargetId: string
}

export class DeleteCourseTargetInput
    implements AuthInput<DeleteCourseTargetInputData> {
    @IsUUID("4")
    userId: string
    @ApiProperty()
    data: DeleteCourseTargetInputData
}

export class CreateLectureInputData {
    @IsUUID("4")
    @ApiProperty()
    sectionId: string
    @ApiProperty()
    title: string
}

export class CreateLectureInput implements AuthInput<CreateLectureInputData> {
    @IsUUID("4")
    userId: string
    data: CreateLectureInputData
}

export class DeleteLectureInputData {
    @IsUUID()
    @ApiProperty()
    lectureId: string
}

export class DeleteLectureInput
    implements AuthInput<DeleteLectureInputData> {
    @IsUUID("4")
    userId: string
    @ApiProperty()
    data: DeleteLectureInputData
}


export class CreateSectionInputData {
    @IsUUID("4")
    @ApiProperty()
    courseId: string

    @ApiProperty()
    title: string
}

export class CreateSectionInput implements AuthInput<CreateSectionInputData> {
    @IsUUID("4")
    userId: string
    data: CreateSectionInputData
}

export class CreateResourcesInputData {
    @IsUUID("4")
    @ApiProperty()
    lectureId: string
}
export class CreateResourcesInput implements AuthInput<CreateResourcesInputData> {
    @IsUUID("4")
    userId: string
    data: CreateResourcesInputData
    files: Express.Multer.File[]
}

export class UpdateLectureInputData {
    @IsUUID("4")
    @ApiProperty()
    lectureId: string
    @ApiProperty({ nullable: true })
    title?: string
    @ApiProperty({ nullable: true })
    description?: string
    @ApiProperty({ nullable: true })
    thumbnailIndex?: number
    @ApiProperty({ nullable: true })
    lectureVideoIndex?: number
}

export class UpdateLectureInput implements AuthInput<UpdateLectureInputData> {
    @IsUUID("4")
    userId: string
    data: UpdateLectureInputData
    files: Express.Multer.File[]
}

export class DeleteSectionInputData {
    @IsUUID()
    @ApiProperty()
    sectionId: string
}

export class DeleteSectionInput
    implements AuthInput<DeleteSectionInputData> {
    @IsUUID("4")
    userId: string
    @ApiProperty()
    data: DeleteSectionInputData
}

export class UpdateSectionInputData {
    @IsUUID("4")
    @ApiProperty({ nullable: true })
    sectionId: string
    @ApiProperty({ nullable: true })
    title?: string
}

export class UpdateSectionInput implements AuthInput<UpdateSectionInputData> {
    @IsUUID("4")
    userId: string
    data: UpdateSectionInputData
}

export class DeleteResourceInputData {
    @IsUUID()
    @ApiProperty()
    resourceId: string
}

export class DeleteResourceInput
    implements AuthInput<DeleteResourceInputData> {
    @IsUUID("4")
    userId: string
    @ApiProperty()
    data: DeleteResourceInputData
}

//dev only apis
export class CreateCategoryInputData {
    @ApiProperty()
    name: string
}

export class CreateCategoryInput implements AuthInput<CreateCategoryInputData> {
    @IsUUID("4")
    userId: string
    data: CreateCategoryInputData
}

export class CreateSubcategoryInputData {
    @ApiProperty()
    name: string
    @ApiProperty()
    categoryId: string
}

export class CreateSubcategoryInput implements AuthInput<CreateSubcategoryInputData> {
    @IsUUID("4")
    userId: string
    data: CreateSubcategoryInputData
}

export class CreateTopicInputData {
    @ApiProperty()
    name: string
    @ApiProperty()
    subcategoryIds: Array<string>
}

export class CreateTopicInput implements AuthInput<CreateTopicInputData> {
    @IsUUID("4")
    userId: string
    data: CreateTopicInputData
    files: Array<Express.Multer.File>
}


export class DeleteTopicInputData {
    @ApiProperty()
    topicId: string
}

export class DeleteTopicInput implements AuthInput<DeleteTopicInputData> {
    @IsUUID("4")
    userId: string
    data: DeleteTopicInputData
}

export class CreateCourseReviewInputData {
    @IsUUID()
    @ApiProperty()
    courseId: string
    @Length(10, 1000)
    @ApiProperty()
    content: string
    @Min(1)
    @Max(5)
    @ApiProperty()
    rating: number
}
export class CreateCourseReviewInput implements AuthInput<CreateCourseReviewInputData> {
    @IsUUID("4")
    userId: string;
    data: CreateCourseReviewInputData;
}

export class UpdateCourseReviewInputData {
    @IsUUID()
    @ApiProperty()
    courseReviewId: string

    @IsOptional()
    @Length(10, 1000)
    @ApiProperty({ nullable: true })
    content: string

    @IsOptional()
    @Min(1)
    @Max(5)
    @ApiProperty({ nullable: true })
    rating: number
}

export class UpdateCourseReviewInput implements AuthInput<UpdateCourseReviewInputData> {
    @IsUUID("4")
    userId: string;
    data: UpdateCourseReviewInputData
}

export class DeleteCourseReviewInputData {
    @IsUUID()
    @ApiProperty()
    courseReviewId: string
}
export class DeleteCourseReviewInput implements AuthInput<DeleteCourseReviewInputData> {
    @IsUUID("4")
    userId: string;
    data: DeleteCourseReviewInputData;
}

export class CreateCertificateInputData {
    @IsUUID()
    @ApiProperty()
    courseId: string
}

export class CreateCertificateInput implements AuthInput<CreateCertificateInputData> {
    @IsUUID("4")
    userId: string
    data: CreateCertificateInputData
}

export class QuizQuestionAnswerInputData {

    @ApiProperty()
    content: string

    @ApiProperty()
    isCorrect: boolean
}

export class QuizQuestionMediaInputData {
    @IsInt()
    @ApiProperty()
    mediaIndex: number

    @ApiProperty()
    mediaType: MediaType
}

export class QuizQuestionInputData {
    @ApiProperty()
    question: string

    @ApiProperty()
    answers: Array<QuizQuestionAnswerInputData>

    @ApiProperty({ nullable: true })
    questionMedias?: Array<QuizQuestionMediaInputData>
}

export class CreateQuizInputData {
    @IsUUID("4")
    @ApiProperty()
    lectureId: string

    @ApiProperty()
    quizQuestions: Array<QuizQuestionInputData>

    @ApiProperty()
    timeLimit: number

}

export class CreateQuizInput implements AuthInput<CreateQuizInputData> {
    @IsUUID("4")
    userId: string
    data: CreateQuizInputData
    files?: Array<Express.Multer.File>
}

export class UpdateQuizQuestionAnswerInputData {
    @IsUUID("4")
    @ApiProperty()
    quizQuestionAnswerId: string

    @ApiProperty()
    content?: string

    @ApiProperty()
    isCorrect?: boolean
}

export class UpdateQuizQuestionInputData {
    @IsUUID("4")
    @ApiProperty({ nullable: true })
    quizQuestionId?: string

    @ApiProperty({ nullable: true })
    question: string

    @ApiProperty({ nullable: true })
    questionMedias?: Array<QuizQuestionMediaInputData>

    @ApiProperty({ nullable: true })
    quizAnswerIdsToUpdate?: Array<UpdateQuizQuestionAnswerInputData>

    @ApiProperty({ nullable: true })
    quizAnswerIdsToDelete?: Array<string>

    @ApiProperty({ nullable: true })
    mediaIdsToDelete?: Array<string>

    @ApiProperty({ nullable: true })
    newQuizQuestionAnswer: Array<QuizQuestionAnswerInputData>
}

export class UpdateQuizInputData {
    @IsUUID("4")
    @ApiProperty()
    quizId: string

    @ApiProperty()
    timeLimit: number

    @ApiProperty({ nullable: true })
    newQuestions?: Array<QuizQuestionInputData>

    @ApiProperty({ nullable: true })
    quizQuestionIdsToUpdate?: Array<UpdateQuizQuestionInputData>

    @ApiProperty({ nullable: true })
    quizQuestionIdsToDelete?: Array<string>
}

export class UpdateQuizInput implements AuthInput<UpdateQuizInputData> {
    @IsUUID("4")
    @ApiProperty()
    userId: string
    data: UpdateQuizInputData
    files?: Array<Express.Multer.File>
}


export class DeleteQuizInputData {
    @ApiProperty()
    quizIds: Array<string>
}

export class DeleteQuizInput
    implements AuthInput<DeleteQuizInputData> {
    @IsUUID("4")
    @ApiProperty()
    userId: string
    data: DeleteQuizInputData
}

export class CeateUserProgressInputData {
    @ApiProperty()
    lectureId: string
}

export class CeateUserProgressInput implements AuthInput<CeateUserProgressInputData> {
    @IsUUID("4")
    @ApiProperty()
    userId: string
    data: CeateUserProgressInputData
}

export class MarkLectureAsCompletedInputData{
    @IsUUID("4")
    @ApiProperty()
    lectureId: string
}

export class MarkLectureAsCompletedInput implements AuthInput<MarkLectureAsCompletedInputData>{
    @IsUUID("4")
    @ApiProperty()
    userId: string
    data: MarkLectureAsCompletedInputData
}

export class CreateQuizAttemptInputData {
    @IsUUID("4")
    @ApiProperty()
    quizId : string
}

export class CreateQuizAttemptInput implements AuthInput<CreateQuizAttemptInputData> {
    userId: string
    data: CreateQuizAttemptInputData
}

export class FinishQuizAttemptInputData {
    @IsUUID("4")
    @ApiProperty()
    quizAttemptId : string

    @ApiProperty()
    score: number
}

export class FinishQuizAttemptInput implements AuthInput<FinishQuizAttemptInputData>{
    userId: string
    data: FinishQuizAttemptInputData
}