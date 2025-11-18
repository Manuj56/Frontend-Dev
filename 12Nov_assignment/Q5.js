function q5() {
    console.clear();

    let isDoorLocked = true;
    let isWindowClosed = true;
    let isAlarmOn = true;
    let isOwnerInside = true;

    let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    console.log(isSecure ? "Secure" : "Unsafe");

    
    isWindowClosed = false;
    isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    console.log("After Changing Window:", isSecure ? "Secure" : "Unsafe");
}
