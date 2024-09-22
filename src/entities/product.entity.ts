import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('products')
export class Product {
    @PrimaryColumn()
    id: string;
  
    @Column({
        length: 100,
    })
    name: string;
  
    @Column("text")
    description: string;
  
    @Column("double")
    weight: number;
  
    @CreateDateColumn({
      name: 'created_at',
      type: 'timestamp',
    })
    createdAt: Date;
  
    constructor() {
      if (!this.id) {
        this.id = uuid()
      }
    }
}
