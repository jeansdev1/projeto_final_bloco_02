import { IsNotEmpty } from "class-validator"
import { Column, PrimaryGeneratedColumn } from "typeorm"
import { Entity } from "typeorm/decorator/entity/Entity"


@Entity({name: 'tb_categorias'})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    tipo: string

}