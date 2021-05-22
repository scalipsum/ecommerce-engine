import { ProductsService } from './products/products.service';
import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';

@Module({
	controllers: [ProductsController],
	providers: [ProductsService],
})
export class AppModule {}
