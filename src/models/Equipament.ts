import { Model, DataTypes } from 'sequelize';
import { componentSequelize } from '../instances/mysql';


export interface IEquipament extends Model {
  name: string;
  description?: string;
  partNumber: string;
  serialNumber: string;
  status: "Disponível" | "Ocupado";
  quantidade: number;
}

export const Equipament = componentSequelize.define<IEquipament>('Equipament', 
{
  idequipamento: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    defaultValue: false
},
  serialNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  partNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('Disponivel', 'Ocupado'),
    allowNull: false,
    defaultValue: "Disponivel"
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'equipamentos',
  timestamps: false
})

  