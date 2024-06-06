function doGet() {  
return HtmlService.createTemplateFromFile('index').evaluate()
      .setTitle("ระบบสลิปเงินเดือน")
      .addMetaTag('viewport','width=device-width , initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
} 

/**ค้นหา */
function search(obj) {
  var ss = SpreadsheetApp.getActive().getSheetByName('Data') 
  var data =  ss.getDataRange().getDisplayValues()
  var id = obj.month + obj.idcard
  var output = [];
  
  data.forEach(function(f) {
    if (~[f[1].toString().toLowerCase()+f[2]].indexOf(id)){
      output.push(f);
    }
  });
  return output[0];
}

/** ดึงไฟล์ */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
} 
