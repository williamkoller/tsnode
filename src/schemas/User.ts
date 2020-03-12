import { Schema, model, Document } from "mongoose"

interface UserInterface extends Document {
  email?: string
  firstName?: string
  lastName?: string
  age?: number
  fullName(): string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  age: Number
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return this.firstName + ' ' + this.lastName + this.age
}

export default model<UserInterface>('User', UserSchema)