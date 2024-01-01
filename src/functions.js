/**
 * 
 * @param {Array} table 
 * @param {string} value 
 */

function In_array(table,value){
    let bool=false
    table.forEach(element => {
        if(element===value){
            bool=true
        }
        
    })
    return bool
}

export default In_array