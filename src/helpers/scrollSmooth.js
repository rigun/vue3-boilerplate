function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top - 90;
    var eAmt = eTop / 10;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 10;
    }
}

function SVS_B(eAmt, where) {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}
function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
export {
    SmoothVerticalScrolling,
    scrollToTop
}