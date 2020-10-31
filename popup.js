(function () {
    console.log('Ali');
    console.log(this.splitUrl());
})();


function storageSet(key, value) {
    chrome.storage.sync.set({key: value});
}

function storageGet(key) {
    chrome.storage.sync.get([key], function(result) {
        return result.key;
      });
}

function splitUrl() {

    const params = {};

    if (!!window.location.search) {
        window.location.search.split('&').reduce((acc, item) => {
            const itemParam = item.split('=');
            acc[itemParam[0]] = itemParam[1];
        }, params);
        alert(params);
    }

    return {
        domain: window.location.host,
        path: window.location.path,
        params,
    };
}