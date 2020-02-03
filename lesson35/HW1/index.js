 export const parseUser = str => {
     try {
         let result = JSON.parse(str);
         return result;
     } catch (error) {
         return null;
     }
 };