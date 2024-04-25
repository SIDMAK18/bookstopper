import { Schema, model } from "mongoose";

export interface examdata{
    id: string;
    title: string;
    author: string;
    price: number;
    favorite: boolean;
    stars: number;
    imageUrl: string;
    tags?: string[];
    description: string;
}

export const examSchema= new Schema<examdata>({
    title: {type: String, required: true},
    author: {type: String, required: true},
    price: {type: Number, required: true},
    favorite: {type: Boolean, default:false},
    stars: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    tags: {type: [String]},
    description: {type: String, required: true},
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    timestamps:true
}
)

export const examModel=model<examdata>('exam',examSchema);