export const getSeatNoFromSeatLocation = seatLocation => {
    let col = String(seatLocation).charAt(0);
    let row = String(seatLocation).substring(1);
    switch (col) {
        case "A": col = 0;
            break;
        case "B": col = 1;
            break;
        case "C": col = 2;
            break;
        case "D": col = 3;
            break;
        case "E": col = 4;
            break;
        case "F": col = 5;
            break;
        default:
    }
    return ((row - 1) * 6 + col)
}
export const getSeatLocation=(seatNo)=>{
    let seatLocation = '';
    let row= Math.floor(seatNo / 6)+1;
    let col="";
    if(seatNo===""){
        col="";
    }
        else{
            col = seatNo % 6;
        
    }
    //let col=seatNo%6;
    
    switch (col) {
        case 0: seatLocation = 'A' + row;
            break;
        case 1: seatLocation = 'B' + row;
            break;
        case 2: seatLocation = 'C' + row;
            break;
        case 3: seatLocation = 'D' + row;
            break;
        case 4: seatLocation = 'E' + row;
            break;
        case 5: seatLocation = 'F' + row;
            break;
        default:
    }
    return seatLocation;
}