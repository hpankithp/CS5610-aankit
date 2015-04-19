var project = {};

project.getURLParameter = function (parameter) {
    var qryParam = $(location).attr('href').split("?");   /* spliting the array to get the query parameters */
    var paramvalue = "";

    if (qryParam.length > 1) {                              /* check query paramter */

        var qryStrings = qryParam[1].split("&");                    //splitting by '&' only
        $.each(qryStrings, function (index, value) {
            if (value.split("=")[0] == parameter) {
                paramvalue = value.split("=")[1];
                return false;
            }

        })
    }
    return paramvalue;
}