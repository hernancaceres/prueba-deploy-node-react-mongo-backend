import User from "../models/user.model.js";
import bcrypt from "bcrypt";

//BUSCAR TODOS LOS USUARIOS

export const getAllUsuarios = async (req, res) => {
    const usuarios = await User.find();
    res.json(usuarios);
};

//metodos de singup (para registrar un usuario) 

export const register = async (req, res) => {

    try {
        const { username, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10); //encriptamos la contraseña

        const newUser = new User({ username, email, password: hashedPassword, });
        //Guardamos al registro de user
        const userValidated = await newUser.save();
        res.status(201).json(userValidated);

    } catch (error) {
        res.status(500).json({ message: "Error al registrar al Usuario", error });
    }




};