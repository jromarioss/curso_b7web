import { Schema, Model, model, connection } from 'mongoose';

type UserType = {
  name: {
    firstName: string,
    lastName: string
  },
  age: number,
  email: string,
  interests: string[]
}

const schema = new Schema<UserType>({
  name: {
    firstName: { type: String, required: true },
    lastName: String
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  interests: [String]
});

const modelName: string = 'User';
/* Se tem a conexão e se essa conexão tem dentro dela models pega o próprio model e retorna */
const userModel = connection && connection.models[modelName] ? (connection.models[modelName] as Model<UserType>) : model<UserType>(modelName, schema);

export default userModel;