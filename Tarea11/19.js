let letra= prompt("ingrese la letra");

function validar(letra){
    if(letra.length > 1){
        return "no se puede hacer"
    }
    else{
        let helper = false;
        switch(letra){
            case "a":
                return "vocal";
                break;
            case "e":
                return "vocal";
                break;

            case "i":
                return "vocal";
                break;

            case "o":
                return "vocal";
                break;

            case "u":
                return "vocal";
                break;

            default:
                helper = true;
        }
        if(helper){
            return "no es vocal"
        }
    }
}