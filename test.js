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
console.log(typeof data_new)
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
const val =  extractDiffValues2(data_old,data_new)
console.log(val)