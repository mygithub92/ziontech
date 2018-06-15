import { Column, Model, Table } from "sequelize-typescript";


@Table({
    tableName: "stage"
})

@Table
export default class Stage extends Model<Stage> {
    @Column
    name: string;
}
