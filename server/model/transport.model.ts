import { Column, Model, Table, BelongsTo, ForeignKey, CreatedAt, UpdatedAt } from "sequelize-typescript";
import Product from "./product.model";
import User from "./user.model";
import Stage from "./stage.model";

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

    @Column({ field: "transferred" })
    transferred: boolean;

    @Column({field: "driver_id"})
    driverId: string;

    @Column({field: "plate_number"})
    plateNumber: string;

    @ForeignKey(() => Stage)
    @Column({field: "from_stage"})
    fromStage: number;

    @ForeignKey(() => Stage)
    @Column({ field: "stage_id" })
    stageId: number;

    @BelongsTo(() => Stage)
    stage: Stage;
    
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
