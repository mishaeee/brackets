module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 == 1) {
        return false;
    }
    let iter = 0;
    do {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (str.charAt(0) == bracketsConfig[i][0]) {
                let a = str.charAt(str.length - 1);
                let b = bracketsConfig[i][1];
                if (str.charAt(1) == bracketsConfig[i][1]) {
                    str = str.slice(2);
                }
                else if (str.charAt(str.length - 2) == bracketsConfig[i][0]) {
                    str = str.slice(0, str.length - 2);
                }
                else if (str.charAt(str.length - 1) == bracketsConfig[i][1]) {
                    str = str.slice(1, str.length - 1);
                }
            }
            if (str.charAt(str.length - 1) == bracketsConfig[i][1]) {
                let a = str.charAt(str.length - 1);
                let b = bracketsConfig[i][1];
                if (str.charAt(1) == bracketsConfig[i][1]) {
                    str = str.slice(2);
                }
                else if (str.charAt(str.length - 2) == bracketsConfig[i][0]) {
                    str = str.slice(0, str.length - 2);
                }
                else if (str.charAt(str.length - 1) == bracketsConfig[i][1] && str.charAt(0) == bracketsConfig[i][0]) {
                    str = str.slice(1, str.length - 1);
                }
            }
        }
        iter++;
    } while (str.length > 0 && iter < 1000);
    if (str.length == 0) {
        return true;
    }
    else {
        return false;
    }
}
