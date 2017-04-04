export default function auth (req, res, next) {
    const { email, password } = req.body;
    
    if (!email) 
        return res.status(400).send({ 
            error: 'You must enter an e-mail address',
        });

    if (!password)
        return res.status(400).send({ 
            error: 'You must enter a password',
        });

    next();
}