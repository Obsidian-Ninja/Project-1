import mongoose from "mogoose"

const UserSchema = new.mongoose.schema(
{
        name: {
            type: String,
            required: true,
        }
    ,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profileImage: {
        type: String,
        default: "",
    },
    clerkId: {
        // used as a refernce
        type: String,
        required: true,
        unique:true,
    },
},
{timestamps: true} // created at, updated at
);

const User = mongoose.model("User", UserSchema);

export default User;