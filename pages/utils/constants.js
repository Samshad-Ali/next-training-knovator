
const constants ={
    
    // regex----
passwordCharacterPattern : /.{8,}/,
passwordAlphabetLowerUpperPattern : /(?=.*[a-z])(?=.*[A-Z])/,
passwordDigitSymbolPattern: /(?=.*[0-9])(?=.*[~!"#$%&()*,.:<>?@^{|}])/,
validationText :'Should contain at least one number (0-9) and a symbol (`~!"#$%&()*,.:<>?@^{|})',
character:'character',
alphabet:'alphabet',
symbol:'symbol'
}
    
export const {passwordCharacterPattern,passwordAlphabetLowerUpperPattern,passwordDigitSymbolPattern,validationText,character,alphabet,symbol} = constants;