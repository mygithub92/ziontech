import { Column, Model, Table, BelongsTo, ForeignKey, CreatedAt, UpdatedAt } from "sequelize-typescript";
import User from "./user.model";
import Product from "./product.model";


@Table({
    tableName: "grape"
})



@Table
export default class Grape extends Model<Grape> {

    @Column({ field: "name" })
    name: string;

    @Column({ field: "region" })
    region: string;

    @Column({ field: "vineyard" })
    vineyard: string;

    @Column({ field: "variety" })
    variety: string;

    @Column({ field: "block" })
    block: string;

    @Column({ field: "row_range" })
    rowRange: string;

    @Column({ field: "vintage" })
    vintage: number;

    @Column({ field: "estimated_weight" })
    estimatedWeight: number;

    @Column({ field: "actual_weight" })
    actualWeight: number;

    @Column({ field: "transferred" })
    transferred: boolean;

    @Column({ field: "bins" })
    bins: number;

    @Column({ field: "status" })
    status: string;

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
