/**
 * Common response utility function to minimize code duplication accross service layers
 * @param {*} res Response object  
 * @param {*} httpStatus HTTP status code
 * @param {*} data Filnal response data Object
 */
function sendResponse(res,httpStatus,data) {
    return res.status(httpStatus).send(data)
}

function getStateCodeFromPOS(pos){
    if(pos && pos.indexOf("-") > 0){
        return pos.split("-")[0];
    } else {
        return pos;
    }
}

function calSupTypeFor3H(supGstin, pos, sec7act, issez, suptype) {
    pos = (pos.length == 1) ? ("0" + pos) : pos;
    if (supGstin && pos) {
        sec7act = sec7act.toUpperCase() === 'YES' ? 'Y' : sec7act; 
        if ((/^\d{2}$/).test(supGstin.slice(0, 2))) {
            if ((pos == supGstin.slice(0, 2))) {
                return (sec7act == 'Y' || pos == "97" || issez == 'Y') ? "Inter-State" : "Intra-State";
            } else {
                return "Inter-State";
            }
        } else {
            return (sec7act == 'Y' || issez == 'Y') ? "Inter-State" : suptype;
        }
    } else {
        return suptype;
    }
}

function calSupTypeFor3A(gstin, pos, sec7act, issez, suptype) {
    pos = (pos.length == 1) ? ("0" + pos) : pos;  
    if (gstin && pos) {
        if ((/^\d{2}$/).test(gstin.slice(0, 2))) {
            if ((pos == gstin.slice(0, 2))) {
                return (sec7act.toUpperCase() === 'YES' || sec7act == 'Y' || pos == "96" || issez == 'Y') ? "Inter-State" : "Intra-State";
            } else {
                return "Inter-State";
            }
        } else {
            return suptype;
        }
    } else {
        return suptype;
    }
}

function calSupTypeFor3B(gstin, pos, sec7act, issez, suptype) {
    pos = (pos.length == 1) ? ("0" + pos) : pos;    
    if (gstin && pos) {
        if ((/^\d{2}$/).test(gstin.slice(0, 2))) {
            if (pos == gstin.slice(0, 2)) {
                return (sec7act.toUpperCase() === 'YES' || sec7act == 'Y' || pos == "97" || issez == 'Y') ?  "Inter-State" :  "Intra-State"
            } else {
                return "Inter-State";
            }
        } else {
            return suptype;
        }        
    } else {
        return suptype;
    }
}
function calSupTypeFor3BA(gstin, pos, sec7act, issez, suptype) {
    pos = (pos.length == 1) ? ("0" + pos) : pos;    
    if (gstin && pos) {
        if ((/^\d{2}$/).test(gstin.slice(0, 2))) {
            if (pos == gstin.slice(0, 2)) {
                return (sec7act.toUpperCase() === 'YES' || sec7act == 'Y' || pos == "97" || issez == 'Y') ?  "Inter-State" :  "Intra-State"
            } else {
                return "Inter-State";
            }
        } else {
            return suptype;
        }        
    } else {
        return suptype;
    }
}
function calSupTypeFor3L(gstin, pos, sec7act, issez, suptype) {
    pos = (pos.length == 1) ? ("0" + pos) : pos;    
    if (gstin && pos) {
        if ((/^\d{2}$/).test(gstin.slice(0, 2))) {
            if (pos == gstin.slice(0, 2)) {
                return (sec7act.toUpperCase() === 'YES' || sec7act == 'Y' || pos == "97" || issez == 'Y') ?  "Inter-State" :  "Intra-State"
            } else {
                return "Inter-State";
            }
        } else {
            return suptype;
        }        
    } else {
        return suptype;
    }
}
function calSupTypeFor3G(gstin, pos, sec7act, issez, suptype) {
    logger.log("debug", "calSupTypeFor3G : %s, %s, %s, %s, %s", gstin, pos, sec7act, issez, suptype)
    pos = (pos.length == 1) ? ("0" + pos) : pos;    
    if (gstin && pos) {
        if ((/^\d{2}$/).test(gstin.slice(0, 2))) {
            if (pos == gstin.slice(0, 2)) {
                return (sec7act.toUpperCase() === 'YES' || sec7act == 'Y' || issez == 'Y') ?  "Inter-State" :  "Intra-State"
            } else {
                return "Inter-State";
            }
        } else {
            return suptype;
        }        
    } else {
        return suptype;
    }
}

function calSupTypeFor3HA(supGstin, pos, sec7act, issez, suptype) {
    pos = (pos.length == 1) ? ("0" + pos) : pos;
    if (supGstin && pos) {
        sec7act = sec7act.toUpperCase() === 'YES' ? 'Y' : sec7act; 
        if ((/^\d{2}$/).test(supGstin.slice(0, 2))) {
            if ((pos == supGstin.slice(0, 2))) {
                return (sec7act == 'Y' || pos == "97" || issez == 'Y') ? "Inter-State" : "Intra-State";
            } else {
                return "Inter-State";
            }
        } else {
            return (sec7act == 'Y' || issez == 'Y') ? "Inter-State" : suptype;
        }
    } else {
        return suptype;
    }
}
module.exports = {
    sendResponse: sendResponse,
    calSupTypeFor3H : calSupTypeFor3H,
    calSupTypeFor3A : calSupTypeFor3A,
    calSupTypeFor3B : calSupTypeFor3B,
    calSupTypeFor3BA : calSupTypeFor3BA,
    calSupTypeFor3G : calSupTypeFor3G,
    calSupTypeFor3L:calSupTypeFor3L,
    getStateCodeFromPOS : getStateCodeFromPOS
}