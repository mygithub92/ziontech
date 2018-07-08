import { Column, Model, Table, BelongsTo, ForeignKey, CreatedAt, UpdatedAt } from "sequelize-typescript";
import User from "./user.model";
import Product from "./product.model";

@Table({
    tableName: "warehouse"
})

@Table
export default class Warehouse extends Model<Warehouse> {
    @Column
    remaining: number;

    @Column({ field: "transfer_date" })
    transferDate: Date;

    @Column
    transferred: boolean;

    @ForeignKey(() => User)
    @Column({ field: "user_id" })
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Product)
    @Column({ field: "product_id" })
    productId: number;

    @BelongsTo(() => Product)
    product: Product;

    @CreatedAt
    @Column({field: "creation_date"})
    creationDate: Date;
  
    @UpdatedAt
    @Column({field: "updated_date"})
    updatedDate: Date;
}
