import * as mongoose from 'mongoose';

export interface WeightClass extends mongoose.Document {
  pounds: number;
}

let weightClassSchema = new mongoose.Schema({
  pounds: {
    type: Number
  }
})

export default mongoose.model<WeightClass>('weightClass', weightClassSchema)
