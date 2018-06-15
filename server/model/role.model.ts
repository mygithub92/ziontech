import { Column, Model, Table } from "sequelize-typescript";


@Table({
    tableName: "role"
})

@Table
export default class Role extends Model<Role> {
    @Column
    name: string;
}
