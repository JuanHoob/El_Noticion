// Importamos joi.
import joi from "joi";

// Importamos los mensajes de error personalizados.
import joiErrorMessages from "../joiErrorMessages.js";

// Creamos el esquema de Joi donde comprobamos todas las propiedades necesarias.
const newUserSchema = joi.object({
  username: joi.string().required().messages(joiErrorMessages),
  hobbies: joi.string().messages(joiErrorMessages),
  biography: joi.string().messages(joiErrorMessages),
  password: joi
    .string()
    .pattern(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~=`{}:";'<>¿?,./])[a-zA-Z0-9!@#$%^&*()_+|~=`{}:";'<>¿?,./]{4,}$/
    )
    .required()
    .messages(joiErrorMessages),
  email: joi.string().email().required().messages(joiErrorMessages),
});



export default newUserSchema;
