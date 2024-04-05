const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler).catch((err) => next(err))
    }
}

export default asyncHandler

// const asyncHandler = (fn) =>async (err , req , res , next)=>{
//    try {
//     await fn(err , req , res , next)

//    } catch (error) {
//         res.status(err.code || 500).json({
//             message : err.message,
//             success : false
//         })

//    }


// }
