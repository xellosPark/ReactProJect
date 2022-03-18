import mongoose from "mongoose";
import { schema } from "mongoose";

const userUchma = new schema({
    name: {
        type:String,
        require:true,
        // default: "THIS IS A NAME",
    },
    email:{
        type: String,
        // 없으면 오류 출력
        require: true,
        // 중복 방지
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

export default User;