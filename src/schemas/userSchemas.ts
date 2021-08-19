import joi, { string } from "joi";

export const signUpSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().min(6).required(),
	confirmPassword: joi.ref("password")
});