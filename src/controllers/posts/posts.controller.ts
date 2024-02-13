import {
    Body,
    Controller,
    Delete,
    Param,
    Patch,
    Post,
    Put,
    UploadedFiles,
    UseGuards,
    UseInterceptors,
} from "@nestjs/common"
import {
    ApiBearerAuth,
    ApiBody,
    ApiConsumes,
    ApiHeader,
    ApiQuery,
    ApiTags,
} from "@nestjs/swagger"
import { PostsService } from "./posts.service"
import { UserMySqlEntity } from "@database"
import { FileFieldsInterceptor } from "@nestjs/platform-express"
import { JwtAuthGuard, AuthInterceptor, UserId, DataFromBody } from "../shared"
import {
    CreateCommentData,
    CreatePostData,
    ReactPostData,
    UpdateCommentData,
    UpdatePostData,
} from "./posts.input"

import {
    createCommentSchema,
    createPostSchema,
    updateCommentSchema,
    updatePostSchema,
} from "./posts.schema"

import { Files } from "@common"

@ApiTags("Posts")
@ApiHeader({
    name: "Client-Id",
    description: "4e2fa8d7-1f75-4fad-b500-454a93c78935",
})
@Controller("api/posts")
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

  @ApiBearerAuth()
  @ApiConsumes("multipart/form-data")
  @ApiBody({ schema: createPostSchema })
  @Post("create-post")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
      AuthInterceptor,
      FileFieldsInterceptor([{ name: "files" }]),
  )
    async createPost(
    @UserId() userId: string,
    @DataFromBody() data: CreatePostData,
    @UploadedFiles() { files }: Files,
    ) {
        return await this.postsService.createPost({ userId, data, files })
    }

  @ApiBearerAuth()
  @ApiConsumes("multipart/form-data")
  @ApiBody({ schema: updatePostSchema })
  @Put("update-post")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
      AuthInterceptor,
      FileFieldsInterceptor([{ name: "files" }]),
  )
  async updatePost(
    @UserId() userId: string,
    @DataFromBody() data: UpdatePostData,
    @UploadedFiles() { files }: Files,
  ) {
      return await this.postsService.updatePost({ userId, data, files })
  }

  @ApiBearerAuth()
  @Delete("delete-post")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(AuthInterceptor)
  async deletePost(@UserId() userId: string, @Param("postId") postId: string) {
      console.log(postId)
  }

  @ApiBearerAuth()
  @Patch("react-post")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(AuthInterceptor)
  async reactPost(@UserId() userId: string, @Body() body: ReactPostData) {
      return this.postsService.reactPost({
          userId,
          data: body,
      })
  }

  @ApiBearerAuth()
  @ApiConsumes("multipart/form-data")
  @ApiBody({ schema: createCommentSchema })
  @Post("create-comment")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
      AuthInterceptor,
      FileFieldsInterceptor([{ name: "files" }]),
  )
  async createComment(
    @UserId() userId: string,
    @DataFromBody() data: CreateCommentData,
    @UploadedFiles() { files }: Files,
  ) {
      return await this.postsService.createComment({ userId, data, files })
  }

  @ApiBearerAuth()
  @ApiConsumes("multipart/form-data")
  @ApiBody({ schema: updateCommentSchema })
  @Put("update-comment")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
      AuthInterceptor,
      FileFieldsInterceptor([{ name: "files" }]),
  )
  async updateComment(
    @UserId() userId: string,
    @DataFromBody() data: UpdateCommentData,
    @UploadedFiles() { files }: Files,
  ) {
      return await this.postsService.updateComment({ userId, data, files })
  }

  @ApiBearerAuth()
  @Delete("delete-comment")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(AuthInterceptor)
  async deleteComment(
    @UserId() userId: string,
    @Param("commentId") postId: string,
  ) {
      console.log(postId)
  }

  @ApiBearerAuth()
  @Patch("react-comment")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(AuthInterceptor)
  async reactComment(@UserId() userId: string, @Body() body: ReactPostData) {
      return null
  }
}