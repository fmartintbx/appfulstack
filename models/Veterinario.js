import mongoose from 'mongoose'

const veterinarioSchema = mongoose.Schema({ 
    name: { 
        type: String,
        required: true,
        trim: true,
    },
    password: { 
        type: String,
        required: true,

    },
    email: { 
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    telephone: { 
        type: String,
        default: null,
        trim: true,
    },
    web:{ 
        type: String,
        default: null,
    },
    token: { 
        type: String,
    },
    confirmate:{ 
        type: Boolean,
        default: false
    }
});

const Veterinario = mongoose.model("Veterinario", veterinarioSchema);
export default Veterinario;