import mongoose from 'mongoose';

const connectDB = async () =>{

    mongoose.connection.on('connected',()=>{
        console.log('MongoDB Connected...');
    })

    await mongoose.connect(`mongodb+srv://syuq:123@cluster0.nkqvt.mongodb.net/StudentPrintServices`)

}
export default connectDB;