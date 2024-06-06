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
