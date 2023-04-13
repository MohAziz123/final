const { body, validationResult } = require('express-validator')



exports.registerValidation = [
    body('email' , 'Not a valid email').isEmail(),
    body('password','password must 8 char ').isLength({min : 8})

]

exports.loginvalidation = [
    body('email' , 'Not a valid email').isEmail(),
    body('password','password must 8 char ').isLength({min : 8})
]

exports.validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}
