import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { PostService } from './post/post.service';
import { DepartmentService } from './department/department.service';
import { AdminRoleService } from './admin-role/admin-role.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'pkbc_admin',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PostService, DepartmentService, AdminRoleService],
})
export class AppModule {
  constructor(private datasource: DataSource) {
    console.log('AppModule');
  }
}
