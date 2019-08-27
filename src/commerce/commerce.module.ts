import { CommerceController } from './commerce.controller';
import { Commerce } from './../models/commerce.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CommerceService } from './commerce.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Commerce
    ])
  ],
  providers: [CommerceService],
  controllers: [CommerceController]
})
export class CommerceModule {}
