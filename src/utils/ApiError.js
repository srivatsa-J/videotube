class ApiError extends Error {
  constructor(message="something went wrong", statusCode,errors=[],stack="") {
    super(message);
    this.statusCode = statusCode;
    this.name = null
    this.error = error;
    this.success=false;
    this.message= message;
    if(stack){
        this.stack = stack;
    }else{
        Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };