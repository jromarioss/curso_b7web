import { Model, DataTypes } from 'sequelize';
import { sequelize} from '../instances/mysql';

export interface TodoInstance extends Model {
  ip: number;
  title: string;
  done: boolean;
}

export const Todo = sequelize.define<TodoInstance>('', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'todos',
  timestamps: false
});