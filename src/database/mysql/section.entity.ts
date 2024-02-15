import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm"
import { LectureEntity } from "./lecture.entity"
import { CourseEntity } from "./course.entity"
import { Field, ID, ObjectType } from "@nestjs/graphql"

@ObjectType()
@Entity("section")
export class SectionEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
      sectionId: string

  @Field(() => String)
  @Column({ type: "varchar", length: 200 })
      title: string

  @Field(() => String)
  @Column({ name: "courseId", type: "uuid", length: 36 })
      courseId: string

  @Field(() => Date)
  @Column({
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
      onUpdate: "CURRENT_TIMESTAMP",
  })
      createdAt: Date

  @Field(() => CourseEntity)
  @ManyToOne(() => CourseEntity, (course) => course.sections)
  @JoinColumn({ name: "courseId" })
      course: CourseEntity

  @Field(() => [LectureEntity])
  @OneToMany(() => LectureEntity, (video) => video.section)
      lectures: Array<LectureEntity>
}
