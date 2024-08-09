import { Type } from "class-transformer"
import { IsDate, IsNotEmpty, IsOptional } from "class-validator"
import { Categoria } from "src/categoria/entities/categoria.entity"
import { Usuario } from "src/usuario/entities/usuario.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome: string

    @Column({length: 255, nullable: false})
    marca: string

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 10, scale: 2})
    preco: number

    @IsOptional()
    @Column({ type: 'text', nullable: true })
    descricao?: string

    @IsOptional()
    @IsDate()
    @Type(() => Date) 
    dataValidade?: Date;

    @IsOptional()
    @Column({ type: 'text', nullable: true })
    foto?: string

    @IsNotEmpty()
    @Column({ type: 'int', nullable: false })
    estoque: number

    @ManyToOne(() => Categoria, (categoria) => categoria.produto ,{
        onDelete: "CASCADE"
    })
        categoria: Categoria;

    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}

