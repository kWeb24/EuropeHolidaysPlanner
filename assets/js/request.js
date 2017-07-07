if (typeof XMLHttpRequest == "undefined") {
    XMLHttpRequest = function() {
        return new ActiveXObject(
            navigator.userAgent.indexOf("MSIE 5") >= 0 ? "Microsoft.XMLHTTP" : "Msxml2.XMLHTTP"
        );
    };
}

function ajax(options) {
    options = {
        onComplete: options.onComplete || function(){},
        onError: options.onError || function(){},
        onSuccess: options.onSuccess || function(){},
        data: options.data,
    };

    var xml = new XMLHttpRequest();
    xml.open('POST', '/stats.php', true);
    xml.setRequestHeader("Content-Type", "application/json");
    xml.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    xml.onreadystatechange = function() {
        if (xml.readyState == 4) {
            if (httpSuccess(xml)) {
                var returnData = xml.responseText;
                options.onSuccess(returnData);
            } else {
                options.onError();
            }
            options.onComplete();
            xml = null;
        }
    };

    xml.send(JSON.stringify(options.data));

    function httpSuccess(r) {
        try {
            return ( r.status >= 200 && r.status < 300 || r.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof r.status == "undefined");
        } catch(e) {
            return false;
        }
    }
}

function addTotal() {
    var request = { type: 'insert', route: 'total', data: '' };
    ajax({
        onError: function(msg) {
            console.warn('Total incrementation failed. Error: ' + msg);
        },
        onSuccess: function(msg) {
            if (msg) console.log(msg);
        },
        data: request,
    });
}

function addCompleted() {
    var request = { type: 'insert', route: 'completed', data: '' };
    ajax({
        onError: function(msg) {
            console.warn('Completed incrementation failed. Error: ' + msg);
        },
        onSuccess: function(msg) {
            if (msg) console.log(msg);
        },
        data: request,
    });
}

function addDeaths(code) {
    var request = { type: 'insert', route: 'deaths', data: code };
    ajax({
        onError: function(msg) {
            console.warn('Deaths (' + code + ') incrementation failed. Error: ' + msg);
        },
        onSuccess: function(msg) {
            if (msg) console.log(msg);
        },
        data: request,
    });
}
