const pool = require('../../db'); // Asegúrate de importar tu configuración de pool de PostgreSQL


exports.getMessages = async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).send('Acceso denegado');
    }

    try {
        const result = await pool.query('SELECT * FROM mensajes'); // Cambia 'mensajes' por tu tabla
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error al obtener mensajes:', error);
        res.status(500).send('Error al obtener mensajes');
    }
};

exports.postMessage = async (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log(req.body);
    try {
        await pool.query('INSERT INTO contacto(nombre, correo, mensaje) VALUES($1, $2, $3)', [nombre, email, mensaje]); // Cambia 'mensajes' por tu tabla
        console.log('Mensaje recibido:', { nombre, email, mensaje });
        res.status(200).json({ message: 'Mensaje recibido correctamente' });
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        res.status(500).send('Error al enviar el mensaje');
    }
};


