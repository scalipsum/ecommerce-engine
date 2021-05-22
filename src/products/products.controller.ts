import {
	Controller,
	Get,
	Param,
	Post,
	Body,
	Query,
	Put,
	Delete,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
	constructor(private productsService: ProductsService) {}

	@Post()
	async create(@Body() createProductDto: CreateProductDto) {
		this.productsService.create(createProductDto);
	}

	@Get()
	async findAll(): Promise<Product[]> {
		return this.productsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string): string {
		return `This action returns a #${id} product`;
	}

	@Put('id')
	update(
		@Param('id') id: string,
		@Body() updateProductDto: CreateProductDto,
	) {
		return `This action updates a #${id} product`;
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return `This action removes a #${id} product`;
	}
}
