import mongoose from 'mongoose';

const cheetahSchema = new mongoose.Schema(
    {
        name: String,
        pattern: String,
        speed: Number,
        country: String
    }
)



//use the 
export default mongoose.models.cheetah || mongoose.model('cheetah', cheetahSchema)