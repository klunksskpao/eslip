https://examblog64.krooluang.com/2023/05/blog-post.html


Home
ระบบจัดการงาน
แบบส่งงานpdf
supermag
Contact Us
Crud-4-file
multiple-template
ExamBlog
หน้าหลัก
DOGET
แบบขอรับไฟล์
เรื่องอื่นๆ
ติดต่อเรา
เช็คค่าว่าง INPUT
สมัครสมาชิก
สร้าง QRCODE
หน้าแรก
ระบบค้นหา
ระบบพิมพ์สลิปเงินเดือนออนไลน์
พฤษภาคม 02, 2566
0
 
ระบบพิมพ์สลิปเงินเดือนออนไลน์ Database


  <style>
    body {
      font-family: 'Noto Sans Thai', sans-serif;
    }

    a {
      color: #198754;
      text-decoration: none;
    }

    .center{
      text-align:center;
    }
    
    @media print {
    body * {
      visibility: hidden;
    }

    .print-container,
    .print-container * {
      visibility: visible;
    }

    .print-container {
      position: absolute;
      left: 0px;
      top: 0px;
    }
  }
  </style>
view raw css hosted with ❤ by GitHub
<!doctype html>
<html lang="en">

<head>
  <base target="_top">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap" rel="stylesheet">
  <?!= include('css'); ?>
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card bg-white" id="psearch">
          <h5 class="card-header text-white bg-success"><i class="fa-solid fa-money-bill"></i>
            ระบบพิมพ์สลิปเงินเดือนออนไลน์</h5>
          <form id="searchform" onsubmit="searchData(this)">
            <div class="card-body text-center">
              <select class="form-control mb-2" id="month" name="month" required>
                <option selected disabled value="">เลือกเดือน..</option>
                <option>เมษายน 2566</option>
                <option>พฤษภาคม 2566</option>
                <!-- <option>มิถุนายน 2566</option>
                <option>กรกฎาคม 2566</option>
                <option>สิงหาคม 2566</option>
                <option>กันยายน 2566</option>
                <option>ตุลาคม 2566</option>
                <option>พฤศจิกายน 2566</option>
                <option>ธันวาคม 2566</option> -->
        </select>
              <input class="form-control" type="text" name="idcard" placeholder="พิมพ์หมายเลขบัตรประชาชน" maxlength="13" required>
            </div>

            <button type="submit" class ="btn btn-success text-white w-100" id="btn1"><i class="fa-solid fa-magnifying-glass"></i> ค้นหา</button>
            <button class="btn btn-success w-100" type="button" disabled id="btn2" style="display:none">
 <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  กำลังค้นหา...
</button>
          </form>
           </div>
    <div class="container">
    <button onclick="window.print();" id="btnprint" style="display:none" class="btn btn-warning mb-1"><i class="fa-solid fa-print"></i></button>
      </div>
    <div class="container print-container">
    <div id="result"></div>
  </div>
    </div>
    </div>
    <div class="copyright my-3"></div>
  </div>

  <?!= include('js'); ?>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
  <script src="https://cdn.jsdelivr.net/gh/examblog/web/js/FtExamblog.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
</body>

</html>
view raw index hosted with ❤ by GitHub
  <script>
    $(document).ready(()=>{
      setFooter()
     });

    function searchData(obj) {
      event.preventDefault()
      $('#btn1').hide()
      $('#btn2').show() 
      google.script.run.withSuccessHandler(successData).search(obj);
    }

    function successData(data) {
       if(data && data !== undefined && data.length != 0){
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'ยินดีด้วย..พบข้อมูลของคุณ',
        showConfirmButton: false,
        timer: 1500,
      })

      var result = `
       <table class="table table-bordered">  
        <thead class="p-3 mb-2 bg-success text-white">
        <tr>
        <th scope="col" colspan="12" class="center">รายละเอียด</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <th>ชื่อ สกุล</th>
        <td>${data[0]}</td>
        </tr> 

        <tr>
        <th>เดือน</th>
        <td>${data[1]}</td>
        </tr> 

        <tr>      
        <th>ประเภท</th>
        <td>${data[3]}</td>  
        </tr> 

        <tr>      
        <th>เงินเดือน</th>
         <td>${data[4]}</td>  
        </tr> 

        <tr>      
        <th>อื่นๆ</th>
        <td>${data[5]}</td>  
        </tr> 

        <tr>      
        <th>รวมรับ</th>
        <td>${data[6]}</td>  
        </tr>

        <tr>      
        <th>กบข.</th>
        <td>${data[7]}</td>  
        </tr> 

        <tr>      
        <th>ภาษี</th>
        <td>${data[8]}</td>    
        </tr> 

        <tr>      
        <th>ฌาปนกิจ</th>
        <td>${data[9]}</td>  
        </tr> 

        <tr>      
        <th>สหกรณ์ออมทรัพย์</th>
        <td>${data[10]}</td> 
        </tr> 

        <tr>      
        <th>ธนาคาร กอ</th>
        <td>${data[11]}</td> 
        </tr> 

        <tr>      
        <th>ธนาคาร ออ</th>
        <td>${data[12]}</td>  
        </tr> 

        <tr>      
        <th>รวมจ่าย</th>
        <td>${data[13]}</td> 
        </tr> 

        <tr>      
        <th>คงหลือโอน</th>
        <td>${data[14]}</td>  
        </tr> 

        <tr>      
        <th>วันเดือนปีที่โอน</th>
        <td>${data[15]}</td>  
        </tr> 
       
        </tbody>
        </table>`

        $('#btnprint').show()
        $('#psearch').hide()
        $('#searchform')[0].reset()
        $("#result").html(result)
        }else{
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'ไม่พบข้อมูลของคุณ',
        showConfirmButton: false,
        timer: 1500,
         })
        $("#result").html('')
          }
        $('#btn1').show()
        $('#btn2').hide()
      }

  </script>
view raw js hosted with ❤ by GitHub
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




view raw ระบบพิมพ์สลิปเงินเดือน hosted with ❤ by GitHub

Tags:
ระบบค้นหา
webapp
โพสต์อื่นๆ
ระบบค้นหาเร็วที่สุด
ระบบพิมพ์สลิปเงินเดือนออนไลน์
ข้อมูลนักเรียน User Login
ติดต่อสอบถามปัญหาได้เลยครับ
ใหม่กว่า
เก่ากว่า
ExamBlog
ABOUT US
เกี่ยวกับเรา

ติดต่อผู้พัฒนา
Home
Contact Us
