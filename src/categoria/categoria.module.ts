import { Module } from "@nestjs/common";
import { Categoria } from "./entities/categoria.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})
export class CategoriaModule { }