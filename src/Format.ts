export default class Format {
    private static readonly decimalFormat = new Intl.NumberFormat(undefined, {maximumFractionDigits: 2 });


    public static formatDecimal(num:number) {
        
        if(num % 1000000000000 && num/1000000000000 > 1){
            return ((num/1000000000000).toFixed(2) + "T")
        }else if(num % 1000000000 && num/1000000000 > 1){
            return ((num/1000000000).toFixed(2) + "B")
        }else if(num % 1000000 && num/1000000 > 1){
            return ((num/1000000).toFixed(2) + "M")
        }else if(num % 1000 && num/1000 > 1){
            return ((num/1000).toFixed(2) + "k")
        }else{
            return Format.decimalFormat.format(num);
        }
    }
}