import { Column, Model, Table, ForeignKey, CreatedAt, UpdatedAt } from "sequelize-typescript";
import User from "./user.model";
import Role from "./role.model";

@Table({
    tableName: "user_role"
})

@Table
export default class UserRole extends Model<UserRole> {
    @ForeignKey(() => User)
    @Column({field: "user_id"})
    userId: number;

    @ForeignKey(() => Role)
    @Column({field: "role_id"})
    roleId: number;

    @CreatedAt
    @Column({field: "creation_date"})
    creationDate: Date;
  
    @UpdatedAt
    @Column({field: "updated_date"})
    updatedDate: Date;
}
