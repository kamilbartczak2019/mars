import * as mongoose from "mongoose"

const weatherSchema = new mongoose.Schema({
    terrestrial_date: {type: String, required: true, unique: true},
    min_temp: Number,
    max_temp: Number,
    pressure: Number,
    sol: {type: Number, required: true, unique: true}
})

export default mongoose.model('weather', weatherSchema)
