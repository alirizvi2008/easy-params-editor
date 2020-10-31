(function () {
    console.log('Ali');
})();


function storageSet(key, value) {
    chrome.storage.sync.set({key: value});
}

function storageGet(key) {
    chrome.storage.sync.get([key], function(result) {
        return result.key;
      });
}