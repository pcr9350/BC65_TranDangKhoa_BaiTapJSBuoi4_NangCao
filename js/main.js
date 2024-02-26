/*-----BÀI 1-----
Nhập ngày, tháng, năm
Xuất ra ngày, tháng, năm của ngày kế tiếp và hôm trước.
B1: Đầu vào
Ngày - tháng - năm
Đầu ra ngày - tháng - năm kế tiếp, ngày - tháng - năm hôm trước

B2: xử lý
Cách tính ngày hôm trước của một ngày thực hiện như sau:

Ngày hôm trước chính là ngày giảm 1 đơn vị.
Nếu giảm ngày dẫn đến ngày không hợp lệ (bằng 0) thì ngày hôm trước chính là ngày cuối cùng của tháng trước. Vậy giảm tháng 1 đơn vị.
Nếu giảm tháng dẫn đến tháng không hợp lệ (bằng 0) thì ngày hôm trước chính là ngày cuối cùng của năm trước. Vậy tháng là 12 và giảm năm 1 đơn vị.
Khi đã xác định được tháng và năm cụ thể thì ngày chính là số ngày tối đa của tháng thuộc năm đó.
Cách tính ngày hôm sau của một ngày thực hiện như sau:

Ngày hôm sau chính ngày tăng 1 đơn vị.
Nếu tăng ngày dẫn đến ngày không hợp lệ (lớn hơn số ngày tối đa của tháng thuộc năm đó) thì ngày hôm sau chính là ngày đầu tiên của tháng sau. Vậy ngày bằng 1 và tăng tháng 1 đơn vị.
Nếu tăng tháng dẫn đến tháng không hợp lệ (lớn hơn 12) thì ngày hôm sau chính là ngày đầu tiên của tháng đầu thuộc năm sau. Vậy tháng là 1 và tăng năm 1 đơn vị.

Kiểm tra năm nhuận: là năm chia hết cho 4 và không chia hết cho 100 hoặc năm chia hết cho 400.

B3: xuất ra file html
*/

function handleNextDay() {
    var toDay = +document.getElementById("toDay").value;
    var toMonth = +document.getElementById("toMonth").value;
    var toYear = +document.getElementById("toYear").value;
    if (toDay === 0) {
        document.getElementById("result1").innerHTML = `Ngày không được bằng 0`;
        return;
    };
    if (toMonth === 0) {
        document.getElementById("result1").innerHTML = `Tháng không được bằng 0`;
        return;
    };
    if (toYear === 0) {
        document.getElementById("result1").innerHTML = `Năm không được bằng 0`;
        return;
    };
    if (toMonth > 12) {
        document.getElementById("result1").innerHTML = `Tháng không được lớn hơn 12`;
        return;
    };
    switch (toMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (toDay > 31) {
                document.getElementById("result1").innerHTML = `Ngày của tháng ${toMonth} không được lớn hơn 31`;
            } else if (toDay === 31 && toMonth === 12) {
                document.getElementById("result1").innerHTML = `Ngày tháng năm kế tiếp là: Ngày ${1} tháng ${1} năm ${toYear + 1}.`;
            } else if (toDay === 31 && toMonth !== 12) {
                document.getElementById("result1").innerHTML = `Ngày tháng năm kế tiếp là: Ngày ${1} tháng ${toMonth + 1} năm ${toYear}.`;
            } else if (toDay < 31) {
                document.getElementById("result1").innerHTML = `Ngày tháng năm kế tiếp là: Ngày ${toDay + 1} tháng ${toMonth} năm ${toYear}.`;
            };
        break;
        case 2:
            if (toYear % 4 === 0 && toYear % 100 !== 0 || toYear % 400 === 0) {
                if (toDay > 29) {
                    document.getElementById("result1").innerHTML = `Ngày của tháng ${toMonth} năm nhuận không được lớn hơn 29`;
                } else if (toDay === 29) {
                    document.getElementById("result1").innerHTML = `Ngày tháng năm kế tiếp là: Ngày ${1} tháng ${toMonth + 1} năm ${toYear}.`;
                } else if (toDay < 29) {
                    document.getElementById("result1").innerHTML = `Ngày tháng năm kế tiếp là: Ngày ${toDay + 1} tháng ${toMonth} năm ${toYear}.`;
                }
            } else if (toDay > 28) {
                document.getElementById("result1").innerHTML = `Ngày của tháng ${toMonth} không được lớn hơn 28`;
            } else if (toDay === 28) {
                document.getElementById("result1").innerHTML = `Ngày tháng năm kế tiếp là: Ngày ${1} tháng ${toMonth + 1} năm ${toYear}.`;
            } else if (toDay < 28) {
                document.getElementById("result1").innerHTML = `Ngày tháng năm kế tiếp là: Ngày ${toDay + 1} tháng ${toMonth} năm ${toYear}.`;
            };
        break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (toDay > 30) {
                document.getElementById("result1").innerHTML = `Ngày của tháng ${toMonth} không được lớn hơn 30`;
            } else if (toDay === 30) {
                document.getElementById("result1").innerHTML = `Ngày tháng năm kế tiếp là: Ngày ${1} tháng ${toMonth + 1} năm ${toYear}.`;
            } else if (toDay < 30) {
                document.getElementById("result1").innerHTML = `Ngày tháng năm kế tiếp là: Ngày ${toDay + 1} tháng ${toMonth} năm ${toYear}.`;
            };
        break;
    }; 
};
document.getElementById("handleNextDay").onclick = function() {
    handleNextDay();
};

function handlePreviousDay() {
    var toDay = +document.getElementById("toDay").value;
    var toMonth = +document.getElementById("toMonth").value;
    var toYear = +document.getElementById("toYear").value;
    if (toDay === 0) {
        document.getElementById("result1").innerHTML = `Ngày không được bằng 0`;
        return;
    };
    if (toMonth === 0) {
        document.getElementById("result1").innerHTML = `Tháng không được bằng 0`;
        return;
    };
    if (toYear === 0) {
        document.getElementById("result1").innerHTML = `Năm không được bằng 0`;
        return;
    };
    if (toMonth > 12) {
        document.getElementById("result1").innerHTML = `Tháng không được lớn hơn 12`;
        return;
    };
    switch (toMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (toDay > 31) {
                document.getElementById("result1").innerHTML = `Ngày của tháng ${toMonth} không được lớn hơn 31`;
            } else if (toDay === 1 && toMonth === 1) {
                document.getElementById("result1").innerHTML = `Ngày tháng năm hôm trước là: Ngày ${31} tháng ${12} năm ${toYear - 1}.`;
            } else if (toDay === 1 && toMonth === 3) {
                if (toYear % 4 === 0 && toYear % 100 !== 0 || toYear % 400 === 0) {
                    document.getElementById("result1").innerHTML = `Ngày tháng năm hôm trước là: Ngày ${29} tháng ${2} năm ${toYear}.`;   
                } else {
                    document.getElementById("result1").innerHTML = `Ngày tháng năm hôm trước là: Ngày ${28} tháng ${2} năm ${toYear}.`;
                }
            }
             else if (toDay === 1 && toMonth - 1 !== 0) {
                if (toMonth === 8) {
                    document.getElementById("result1").innerHTML = `Ngày tháng năm hôm trước là: Ngày ${31} tháng ${toMonth - 1} năm ${toYear}.`;
                } else {
                    document.getElementById("result1").innerHTML = `Ngày tháng năm hôm trước là: Ngày ${30} tháng ${toMonth - 1} năm ${toYear}.`;
                };
            } else if (toDay !== 1) {
                document.getElementById("result1").innerHTML = `Ngày tháng năm hôm trước là: Ngày ${toDay - 1} tháng ${toMonth} năm ${toYear}.`;
            };
        break;
        case 2:
            if (toYear % 4 === 0 && toYear % 100 !== 0 || toYear % 400 === 0) {
                if (toDay > 29) {
                    document.getElementById("result1").innerHTML = `Ngày của tháng ${toMonth} năm nhuận không được lớn hơn 29`;
                } else if (toDay === 1) {
                    document.getElementById("result1").innerHTML = `Ngày tháng năm hôm trước là: Ngày ${31} tháng ${1} năm ${toYear}.`;
                } else {
                    document.getElementById("result1").innerHTML = `Ngày tháng năm hôm trước là: Ngày ${toDay - 1} tháng ${toMonth} năm ${toYear}.`;
                };
            } else {
                    if (toDay > 28) {
                        document.getElementById("result1").innerHTML = `Ngày của tháng ${toMonth} không được lớn hơn 28`;
                    } else if (toDay === 1) {
                        document.getElementById("result1").innerHTML = `Ngày tháng năm hôm trước là: Ngày ${31} tháng ${1} năm ${toYear}.`;
                    } else {
                        document.getElementById("result1").innerHTML = `Ngày tháng năm hôm trước là: Ngày ${toDay - 1} tháng ${toMonth} năm ${toYear}.`;
                    };
            };
        break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (toDay > 30) {
                document.getElementById("result1").innerHTML = `Ngày của tháng ${toMonth} không được lớn hơn 30`;
            } else if (toDay === 1) {
                document.getElementById("result1").innerHTML = `Ngày tháng năm hôm trước là: Ngày ${31} tháng ${toMonth - 1} năm ${toYear}.`;
            } else {
                document.getElementById("result1").innerHTML = `Ngày tháng năm kế tiếp là: Ngày ${toDay - 1} tháng ${toMonth} năm ${toYear}.`;
            };
        break;
    }; 
};
document.getElementById("handlePreviousDay").onclick = function() {
    handlePreviousDay();
}

/*-----BÀI 2-----
Nhập tháng, năm
Xuất ra số ngày
B1: Đầu vào
tháng - năm
Đầu ra số ngày

B2: xử lý
Nếu tháng 1,3,5,7,8,10,12: có 31 ngày
Nếu tháng 4,6,9.11: có 30 ngày
Nếu tháng 2: có 28 ngày - năm nhuận có 29 ngày, 
Kiểm tra năm nhuận: là năm chia hết cho 4 và không chia hết cho 100 hoặc năm chia hết cho 400.

B3: xuất ra file html
*/
function handleDay() {
    var numMonth = +document.getElementById("numMonth").value;
    var numYear = +document.getElementById("numYear").value;
    if (numMonth === 0) {
        document.getElementById("result2").innerHTML = `Tháng không được bằng 0`;
        return;
    };
    if (numYear === 0) {
        document.getElementById("result2").innerHTML = `Năm không được bằng 0`;
        return;
    };
    if (numMonth > 12) {
        document.getElementById("result2").innerHTML = `Tháng không được lớn hơn 12`;
        return;
    };
    switch (numMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("result2").innerHTML = `Số ngày trong tháng ${numMonth} năm ${numYear} là 31 ngày`;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("result2").innerHTML = `Số ngày trong tháng ${numMonth} năm ${numYear} là 30 ngày`;
            break;
        case 2:
            if (numYear % 4 === 0 && numYear % 100 !== 0 || numYear % 400 === 0) {
            document.getElementById("result2").innerHTML = `Số ngày trong tháng ${numMonth} năm ${numYear} là 29 ngày`;
            break;
            } else {
                document.getElementById("result2").innerHTML = `Số ngày trong tháng ${numMonth} năm ${numYear} là 28 ngày`;
            break;
            };
    };
};
document.getElementById("handleDay").onclick = function() {
    handleDay();
}

/*-----BÀI 3-----
Nhập số nguyên có 3 chữ số
Xuất ra cách đọc
B1: Đầu vào
số nguyên có 3 chữ số: 100 <= numSoNguyen <= 999
Đầu ra cách đọc
numTram = numSoNguyen / 100
numChuc = (numSoNguyen % 100) / 10
numDonVi = numSoNguyen % 10

B2: xử lý
Só nguyên giới hạn : 100 <= numSoNguyen <= 999
dùng swich case để xét cách đọc hàng trăm , chục, đơn vị
B3: xuất ra file html
*/
function handleCachDocNum() {
    var numSoNguyen = +document.getElementById("numSoNguyen").value;
    var numTram = Math.floor(numSoNguyen / 100);
    var numChuc = Math.floor((numSoNguyen % 100) / 10);
    var numDonVi = Math.floor(numSoNguyen % 10);
    var hangTram;
    var hangChuc;
    var hangDonVi;
    if (numSoNguyen < 100 || numSoNguyen > 999) {
        document.getElementById("result3").innerHTML = `Số nguyên phải có 3 chữ số từ 100 đến 999`;
        return;
    };
    switch (numTram) {
        case 1:
            hangTram = "một trăm";
            break;
        case 2:
            hangTram = "hai trăm";
            break;
        case 3:
            hangTram = "ba trăm";
            break;
        case 4:
            hangTram = "bốn trăm";
            break;
        case 5:
            hangTram = "năm trăm";
            break;
        case 6:
            hangTram = "sáu trăm";
            break;
        case 7:
            hangTram = "bảy trăm";
            break;
        case 8:
            hangTram = "tám trăm";
            break;
        case 9:
            hangTram = "chín trăm";
            break;
    };
    switch (numChuc) {
        case 0:
            if (numDonVi === 0) {
                hangChuc = "";
                break;
            } else {
            hangChuc = "lẻ";
            break;
            };
        case 1:
            hangChuc = "mười";
            break;
        case 2:
            hangChuc = "hai mươi";
            break;
        case 3:
            hangChuc = "ba mươi";
            break;
        case 4:
            hangChuc = "bốn mươi";
            break;
        case 5:
            hangChuc = "năm mươi";
            break;
        case 6:
            hangChuc = "sáu mươi";
            break;
        case 7:
            hangChuc = "bảy mươi";
            break;
        case 8:
            hangChuc = "tám mươi";
            break;
        case 9:
            hangChuc = "chín mươi";
            break;
    };
    switch (numDonVi) {
        case 0:
            hangDonVi = "";
            break;
        case 1:
            if (numChuc === 0) {
                hangDonVi = "một";
            } else {
                hangDonVi = "mốt";
            };
            break;
        case 2:
            hangDonVi = "hai";
            break;
        case 3:
            hangDonVi = "ba";
            break;
        case 4:
            hangDonVi = "bốn";
            break;
        case 5:
            if (numChuc === 0) {
                hangDonVi = "năm";
            } else {
                hangDonVi = "lăm";
            };
            break;
        case 6:
            hangDonVi = "sáu";
            break;
        case 7:
            hangDonVi = "bảy";
            break;
        case 8:
            hangDonVi = "tám";
            break;
        case 9:
            hangDonVi = "chín";
            break;
    };
    document.getElementById("result3").innerHTML = `Số nguyên ${numSoNguyen} đọc là: ${hangTram} ${hangChuc} ${hangDonVi}.`;
};
document.getElementById("handleCachDocNum").onclick = function() {
    handleCachDocNum();
};

/*-----BÀI 4-----
Nhập tên, toạ độ nhà 3 sinh viên - Toạ độ trường
Cho biết sinh viên nào nhà xa trường nhất 
B1: Đầu vào
Tên sinh viên
Toạ độ x,y của nhà 3 sinh vien, toạ độ trường
Mặc định toạ độ trường luôn lớn hơn toạ độ nhà của 3 sinh viên.

B2: xử lý
Công thức tính khoảng cách : Math.sqrt(Math.pow((toaDoXTruong - toaDoXSinhVien), 2) + Math.pow((toaDoYTruong - toaDoYSinhVien), 2))
B3: xuất ra file html
*/
function handleKhoangCach() {
    var tenSinhVien1 = document.getElementById("tenSinhVien1").value;
    var tenSinhVien2 = document.getElementById("tenSinhVien2").value;
    var tenSinhVien3 = document.getElementById("tenSinhVien3").value;
    var tenTruong = document.getElementById("tenTruong").value;
    var toaDoX1 = +document.getElementById("toaDoX1").value;
    var toaDoY1 = +document.getElementById("toaDoY1").value;
    var toaDoX2 = +document.getElementById("toaDoX2").value;
    var toaDoY2 = +document.getElementById("toaDoY2").value;
    var toaDoX3 = +document.getElementById("toaDoX3").value;
    var toaDoY3 = +document.getElementById("toaDoY3").value;
    var toaDoXTruong = +document.getElementById("toaDoXTruong").value;
    var toaDoYTruong = +document.getElementById("toaDoYTruong").value;
    if (toaDoX1 > toaDoXTruong || toaDoY1 > toaDoYTruong || toaDoX2 > toaDoXTruong || toaDoY2 > toaDoYTruong || toaDoX3 > toaDoXTruong || toaDoY3 > toaDoYTruong) {
        document.getElementById("result4").innerHTML = `Toạ độ (X,Y) của trường không được nhỏ hơn toạ độ (X,Y) nhà 3 sinh viên`;
        return;
    };
    var khoangCach1 = Math.sqrt(Math.pow((toaDoXTruong - toaDoX1), 2) + Math.pow((toaDoYTruong - toaDoY1), 2));
    var khoangCach2 = Math.sqrt(Math.pow((toaDoXTruong - toaDoX2), 2) + Math.pow((toaDoYTruong - toaDoY2), 2));
    var khoangCach3 = Math.sqrt(Math.pow((toaDoXTruong - toaDoX3), 2) + Math.pow((toaDoYTruong - toaDoY3), 2));
    if (khoangCach1 > khoangCach2) {
        if (khoangCach1 > khoangCach3) {
            document.getElementById("result4").innerHTML = `Nhà sinh viên ${tenSinhVien1} xa trường ${tenTruong} nhất. Khoảng cách là : ${khoangCach1} km`;
        } else if (khoangCach1 < khoangCach3) {
            document.getElementById("result4").innerHTML = `Nhà sinh viên ${tenSinhVien3} xa trường ${tenTruong} nhất. Khoảng cách là : ${khoangCach3} km`;
        };
    } else if (khoangCach1 < khoangCach2) {
        if (khoangCach2 > khoangCach3) {
            document.getElementById("result4").innerHTML = `Nhà sinh viên ${tenSinhVien2} xa trường ${tenTruong} nhất. Khoảng cách là : ${khoangCach2} km`;
        } else if (khoangCach2 < khoangCach3) {
            document.getElementById("result4").innerHTML = `Nhà sinh viên ${tenSinhVien3} xa trường ${tenTruong} nhất. Khoảng cách là : ${khoangCach3} km`;
        };
    };
};
document.getElementById("handleKhoangCach").onclick = function() {
    handleKhoangCach();
};