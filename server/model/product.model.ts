import { Column, Model, Table, BelongsTo, ForeignKey, HasMany, Scopes, CreatedAt, UpdatedAt } from "sequelize-typescript";
import User from "./user.model";
import Grape from "./grape.model";
import Winery from "./winery.model";
import Wine from "./wine.model";
import Transport from "./transport.model";
import Stage from "./stage.model";

@Scopes({
    grapes: {
        where: { stageId: 10 },
        include: [() => Grape]
    },
    hGrapes: {
        where: { stageId: {$gt: 10 }},
        include: [() => Grape]
    },
    wineries: {
        where: { stageId: 30 },
        include: [() => Grape, () => Winery]
    },
    hWineries: {
        where:  { stageId: {$gt: 30 }},
        include: [() => Grape, () => Winery]
    },
    bottlers: {
        where: { stageId: 50 },
        include: [() => Grape, () => Winery, () => Wine]
    },
    hBottlers: {
        where:  { stageId: {$gt: 50 }},
        include: [() => Grape, () => Winery, () => Wine]
    },
    distributor: {
        where: {stageId: {$in: [20, 40, 60, 80]}},
        include: [() => Grape, () => Winery, () => Wine]
    },
    warehouse: {
        where: {stageId: 70},
        include: [() => Grape, () => Wine]
    },
    hWarehouse: {
        where: {stageId: 80},
        include: [() => Grape, () => Wine]
    }
})

@Table({
    tableName: "product"
})

@Table
export default class Product extends Model<Product> {

    @Column({ field: "company_name" })
    companyName: string;

    @ForeignKey(() => Stage)
    @Column({ field: "stage_id"})
    stageId: number;

    @BelongsTo(() => Stage)
    stage: Stage;

    @ForeignKey(() => User)
    @Column({ field: "user_id" })
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @HasMany(() => Grape)
    grapes: Grape[];

    @HasMany(() => Winery)
    wineries: Winery[];

    @HasMany(() => Wine)
    wines: Wine[];

    @HasMany(() => Transport)
    transports: Transport[];

    
    @CreatedAt
    @Column({field: "creation_date"})
    creationDate: Date;
  
    @UpdatedAt
    @Column({field: "updated_date"})
    updatedDate: Date;
}
