import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm"
import { CourseEntity } from "./course.entity"
import { PostCommentEntity } from "./post-comment.entity"
import { PostContentEntity } from "./post-content.entity"
import { PostReactEntity } from "./post-react.entity"
import { UserEntity } from "./user.entity"
import { Field, ID, ObjectType } from "@nestjs/graphql"
import { UserMySqlEntity } from "."

@ObjectType()
@Entity("post")
export class PostEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
      postId: string

  @Field(() => String)
  @Column({ type: "varchar", length: 500 })
      title: string

  @Field(() => String)
  @Column({ type: "uuid", length: 36 })
      creatorId: string

  @Field(() => String)
  @Column({ type: "uuid", length: 36 })
      courseId: string

  @Field(() => Date)
  @CreateDateColumn()
      createdAt: Date

  @Field(() => Date)
  @UpdateDateColumn()
      updatedAt: Date

  @ManyToOne(() => CourseEntity, (course) => course.posts)
  @JoinColumn({ name: "courseId" })
      course: CourseEntity

  @Field(() => UserMySqlEntity)
  @ManyToOne(() => UserEntity, (user) => user.posts)
  @JoinColumn({ name: "creatorId" })
      creator: UserEntity

  @Field(() => [PostContentEntity])
  @OneToMany(() => PostContentEntity, (postContent) => postContent.post, {
      cascade: ["remove", "insert", "update"],
  })
      postContents: Array<PostContentEntity>

  @OneToMany(() => PostCommentEntity, (postComment) => postComment.post)
      postComments: Array<PostCommentEntity>

  @Field(() => [PostReactEntity])
  @OneToMany(() => PostReactEntity, (postReact) => postReact.post)
      postReacts: Array<PostReactEntity>
}
