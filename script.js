(function() {

// javascript print within the browser (no new windows) using frame layout
// replace myDivToPrint with your div ID from HTML page
function printSummary() {
    var docHead = document.head.outerHTML;
    var printContents = document.getElementById("myDivToPrint").outerHTML;
    var frame1 = document.createElement('iframe');
    frame1.name = "frame1";
    frame1.style.position = "absolute";
    frame1.style.top = "-1000000px";
    document.body.appendChild(frame1);
    var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
    frameDoc.document.open();
    frameDoc.document.write('<!doctype html><html>' + docHead + '<body onLoad="window.print()">' + printContents + '</body></html>');
    frameDoc.document.close();
    window.frames["frame1"].focus();
    setTimeout(function () {
        // window.frames["frame1"].focus();
        // window.frames["frame1"].print();
        document.body.removeChild(frame1);

    }, 500);

    console.log(docHead);

    // printContents();

}


// printing in simplest way with popup new windows
function printContents() {
    var docHead = document.head.outerHTML;
    var printContents = document.getElementById("printSummary").outerHTML;
    console.log(printContents);
    var winAttr = "location=yes, statusbar=no, menubar=no, titlebar=no, toolbar=no,dependent=no, width=865, height=600, resizable=no, screenX=200, screenY=200, personalbar=no, scrollbars=yes";
    var newWin = window.open("", "_blank", winAttr);
    var writeDoc = newWin.document;
    writeDoc.open();
    writeDoc.write('<!doctype html><html>' + docHead + '<body onLoad="window.print()">' + printContents + '</body></html>');
    writeDoc.close();
    newWin.focus();
}
})();
