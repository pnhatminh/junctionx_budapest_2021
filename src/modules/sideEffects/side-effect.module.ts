import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SideEffectRepository } from './side-effect.repository';
import { SideEffectService } from './side-effect.service';

@Module({
  imports: [TypeOrmModule.forFeature([SideEffectRepository])],
  exports: [SideEffectService],
  providers: [SideEffectService],
})
export class SideEffectModule {}
