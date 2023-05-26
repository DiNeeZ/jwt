import { Schema, model, Types } from 'mongoose';

const TokenSchema = new Schema({
  user: { type: Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true }
});

const TokenModel = model('Token', TokenSchema);

export default TokenModel;
