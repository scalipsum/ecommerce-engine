import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';

@Module({
	imports: [ProductsModule],
})
export class AppModule {}
