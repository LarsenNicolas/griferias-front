import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { name, email, cart, total } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // desde .env.local
            pass: process.env.EMAIL_PASS,
        },
    });

    const itemsHtml = cart.map(item =>
        `<li>${item.quantity} x ${item.product.name} - $${item.product.price}</li>`
    ).join('');

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: '¡Gracias por tu compra!',
        html: `
      <h2>¡Hola ${name}!</h2>
      <p>Gracias por tu compra. Este es el resumen de tu pedido:</p>
      <ul>${itemsHtml}</ul>
      <p><strong>Total:</strong> $${total.toFixed(2)}</p>
      <p>Te estaremos contactando pronto para coordinar el envío 📦</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Correo enviado con éxito' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ error: 'Error al enviar el correo' });
    }
}
