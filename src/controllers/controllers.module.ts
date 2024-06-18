import { Module } from "@nestjs/common"

import { AuthModule } from "./auth"
import { CoursesModule } from "./courses"
import { AssetsModule } from "./assets"
import { PostsModule } from "./posts"
import { ProfileModule } from "./profile"
import { AccountsModule } from "./accounts"
import { CartModule } from "./cart"



@Module({
    imports: [
        AssetsModule,
        AuthModule,
        CoursesModule,
        PostsModule,
        ProfileModule,
        AccountsModule,
        CartModule
    ],
    providers: []
})
export class ControllersModule {}
