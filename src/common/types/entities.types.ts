import { registerEnumType } from "@nestjs/graphql"

export enum UserKind {
  Local = "local",
  Google = "google",
  Facebook = "facebook",
}

registerEnumType(UserKind, {
    name: "UserKind",
})

export enum UserRole {
  User = "user",
  Moderator = "moderator",
  Administrator = "administrator",
}

registerEnumType(UserRole, {
    name: "UserRole",
})

export enum VerifyStatus {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
}

registerEnumType(VerifyStatus, {
    name: "VerifyStatus",
})

export enum ContentType {
  Text = "text",
  Code = "code",
  Link = "link",
  Images = "images",
  Videos = "videos",
}

registerEnumType(ContentType, {
    name: "ContentType",
})

export enum ProcessStatus {
  Pending = "pending",
  Processing = "processing",
  Completed = "completed",
}

registerEnumType(ProcessStatus, {
    name: "ProcessStatus",
})

export enum VideoType {
  MP4 = "mp4",
  DASH = "dash",
}

registerEnumType(VideoType, {
    name: "VideoType",
})
