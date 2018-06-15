import { Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import Role from "./role.model";

@Table({
    tableName: 'user'
})

@Table
export default class User extends Model<User> {

    @Column
    name: string;

    @Column
    email: string;

    @Column
    password: string;

    @ForeignKey(() => Role)
    @Column({ field: "role_id" })
    roleId: number;

    @BelongsTo(() => Role)
    role: Role;


}
