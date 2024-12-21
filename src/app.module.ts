import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgencyModule } from './agency/agency.module';

@Module({
  imports: [AgencyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
