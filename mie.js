function may(a){
    if(a>= 0 && a<=3){
        return 'small'
    }else if(a>=4 && a<=6){
        return 'medium'
    }else if(a>=7 && a<=9){
        return 'large'
    }else{
        return 'number is not within the allowed range'
    }
};
console.log(may(9));
