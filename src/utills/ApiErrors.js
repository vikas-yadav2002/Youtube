class ApiError extends Error{
    constructor(
        statusCode, 
        message  = " something went down" , 
        Errors = [],
        statck= "",
    ){
        this.statusCode = statusCode;
        super(message);
        this.data = null ;
        this.message = message;
        this.success = false ;
        this.Errors= Errors ; 

        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this , this.constructor)
        }
}
}


export default ApiError;