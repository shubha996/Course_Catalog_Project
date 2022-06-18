module.exports = (mongoose) => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                firstName: {type: String, required: true},
                lastName: String,
                email: {type: String, required: true, unique: true},
                password: {type: String, required: true},
                role: {type: String, default: "user"}
            },
            { timestamps: true}
        )
    );
    return User;
}