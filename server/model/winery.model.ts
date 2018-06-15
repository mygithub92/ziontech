import { Column, Model, Table, BelongsTo, ForeignKey } from "sequelize-typescript";
import User from "./user.model";
import Product from "./product.model";

@Table({
    tableName: "winery"
})

@Table
export default class Winery extends Model<Winery> {
    @Column
    volume: number;

    @Column
    name: string;

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

}
