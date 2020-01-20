import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { StudentModule as StudentsModule } from './students/students.module';
import { MongooseConfigService } from './mongoose-config.service';

@Module({
  imports: [
    StudentsModule,
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
