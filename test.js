const extractValues = (arr1, arr2) => {
    let result = [];
    arr1.forEach(el => {
      if (!arr2.includes(el)) {
        result.push(el);
      }
    });
    arr2.forEach(el => {
      if (!arr1.includes(el)) {
        result.push(el);
      }
    });
    return result;
};
let data_old = {
    "user_id": 3,
    "company_name": "PS InfoServe PVT LTD",
    "gstin": "33EHOLW8946T3Z6",
    "pan": "EHOLW8946T",
    "address_line1": "",
    "address_line2": "",
    "city": "Madurai",
    "state": "Tamil Nadu",
    "country": "India",
    "postal_code": 625020,
    "mobile_momber": null,
    "email": "software@stvat.com",
    "terms_top": null,
    "terms_bottom": null,
    "logo_path": null
}

let data_new = {
    "user_id": 4,
    "company_name": "PS InfoServe LTD",
    "gstin": "33EHOLW8946T3Z6",
    "pan": "EHOLW8946T",
    "address_line1": "asdfdsa",
    "address_line2": "asdfasd",
    "city": "Madurai",
    "state": "Tamil Nadu",
    "country": "India",
    "postal_code": 625020,
    "mobile_momber": 994400000,
    "email": "software@stvat.com",
    "terms_top": 'asdf',
    "terms_bottom": null,
    "logo_path": null
}
// console.log(typeof data_new)
const extractValues1 = (arr1, arr2) => 
  arr1.reduce((acc, item) => {
    if (arr2.indexOf(item) === -1) {
      return [...acc, item];
    }
    return acc;
  }, []);


const extractDiffValues2 = (oldObj, newObj) => {
    let result = {};
    for (let key in oldObj) {
        if (newObj[key] !== oldObj[key]) {
            //result[key] = [oldObj[key], newObj[key]];
            result[key] = newObj[key]//[oldObj[key], newObj[key]];
        }
    }
    return result;
};
//const val =  extractDiffValues2(data_old,data_new)
// console.log(val)

function price_in_words(price) {
  var sglDigit = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"],
    dblDigit = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
    tensPlace = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"],
    handle_tens = function(dgt, prevDgt) {
      return 0 == dgt ? "" : " " + (1 == dgt ? dblDigit[prevDgt] : tensPlace[dgt])
    },
    handle_utlc = function(dgt, nxtDgt, denom) {
      return (0 != dgt && 1 != nxtDgt ? " " + sglDigit[dgt] : "") + (0 != nxtDgt || dgt > 0 ? " " + denom : "")
    };

  var str = "",
    digitIdx = 0,
    digit = 0,
    nxtDigit = 0,
    words = [];
  if (price += "", isNaN(parseInt(price))) str = "";
  else if (parseInt(price) > 0 && price.length <= 10) {
    for (digitIdx = price.length - 1; digitIdx >= 0; digitIdx--) switch (digit = price[digitIdx] - 0, nxtDigit = digitIdx > 0 ? price[digitIdx - 1] - 0 : 0, price.length - digitIdx - 1) {
      case 0:
        words.push(handle_utlc(digit, nxtDigit, ""));
        break;
      case 1:
        words.push(handle_tens(digit, price[digitIdx + 1]));
        break;
      case 2:
        words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] && 0 != price[digitIdx + 2] ? " and" : "") : "");
        break;
      case 3:
        words.push(handle_utlc(digit, nxtDigit, "Thousand"));
        break;
      case 4:
        words.push(handle_tens(digit, price[digitIdx + 1]));
        break;
      case 5:
        words.push(handle_utlc(digit, nxtDigit, "Lakh"));
        break;
      case 6:
        words.push(handle_tens(digit, price[digitIdx + 1]));
        break;
      case 7:
        words.push(handle_utlc(digit, nxtDigit, "Crore"));
        break;
      case 8:
        words.push(handle_tens(digit, price[digitIdx + 1]));
        break;
      case 9:
        words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] || 0 != price[digitIdx + 2] ? " and" : " Crore") : "")
    }
    str = words.reverse().join("")
  } else str = "";
  return str

}

console.log(price_in_words(1875.68));
console.log(price_in_words(9999999999));