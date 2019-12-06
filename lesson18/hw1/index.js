 function spy(func) {

     function wrapper(...args) {

         wrapper.calls.push(args);
         return func.calls(this, args);

     }

     wrapper.calls = [];

     return wrapper;
 }

 export { spy };