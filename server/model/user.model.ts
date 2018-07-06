import { Column, Model, Table, BelongsToMany } from "sequelize-typescript";
import Role from "./role.model";
import UserRole from "./user-role.model";

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

    @Column
    location: string;

    @Column({ field: "org_name" })
    orgnizationName: string;

    @BelongsToMany(() => Role, () => UserRole)
    roles: Role[];
}
