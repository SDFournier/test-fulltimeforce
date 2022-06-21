import { Module } from '@nestjs/common';
import { CommitModule } from './commits/commits.module';


@Module({
  imports: [CommitModule],
})
export class AppModule {}
