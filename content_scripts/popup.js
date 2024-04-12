const checkOffSwitch = document.getElementById('checkOffSwitch');
const shortcutSwitch = document.getElementById('shortcutSwitch');
const customConfettiSwitch = document.getElementById('customConfettiSwitch');

// Listen for switch toggle
checkOffSwitch.addEventListener('change', (event) => {
    // Save the state of the switch in storage
    chrome.storage.sync.set({checkOffEnabled: event.target.checked}, function() {
        console.log('Value is set to ' + event.target.checked);
    });

    chrome.storage.sync.get('checkOffEnabled', function(result) {
        if(result.checkOffEnabled === true) {
            checkOffEnabled = true;
        }
        console.log('Check Off Enabled: ', result.checkOffEnabled);
    });
});

let checkOffEnabled = false;
