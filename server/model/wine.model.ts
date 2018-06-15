import { Column, Model, Table, BelongsTo, ForeignKey } from "sequelize-typescript";
import User from "./user.model";
import Product from "./product.model";

@Table({
    tableName: "wine"
})

@Table
export default class Wine extends Model<Wine> {
    @Column
    name: string;

    @Column
    label: string;

    @Column({ field: "cork_cap" })
    corkCap: string;

    @Column({ field: "status" })
    status: string;

    @Column({ field: "brand" })
    brand: string;

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
