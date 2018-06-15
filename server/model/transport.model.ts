import { Column, Model, Table, BelongsTo, ForeignKey } from "sequelize-typescript";
import Product from "./product.model";
import User from "./user.model";

@Table({
    tableName: 'transport'
})

@Table
export default class Transport extends Model<Transport> {

    @Column
    from: string;

    @Column
    to: string;

    @Column
    start: Date;

    @Column
    end: Date;

    @Column({field: "driver_id"})
    driverId: string;

    @Column({field: "plate_number"})
    plateNumber: string;

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
