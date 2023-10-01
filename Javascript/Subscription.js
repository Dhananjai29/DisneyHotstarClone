var Year = document.getElementById("yearly");
var Month = document.getElementById("monthly");
var YearBtn = document.getElementById('yearlyBtn');
var MonthBtn = document.getElementById('monthlyBtn');
var PriceBtn1 = document.getElementById('one');
var PriceBtn2 = document.getElementById('two');
var PriceBtn3 = document.getElementById('three');

function Tick(x) {
    if(x === 0)
    {
       Year.style.display = 'block';
       YearBtn.style.color = '#ffffff'
       Month.style.display = 'none';
       MonthBtn.style.color = '#707a94';
    }
    else{
        Month.style.display = 'block';
        MonthBtn.style.color = '#ffffff'
        Year.style.display = 'none';
        YearBtn.style.color = '#707a94';
    }
}

function priceBtn(y) {
    if( y === 2)
    {
        PriceBtn1.style.border = '2px solid white';
        PriceBtn2.style.border = '1px solid rgba(255, 255, 255, 0.402)';
        PriceBtn3.style.border = '1px solid rgba(255, 255, 255, 0.402)';
        $("tr th:nth-child(2)").css("background-color", "#17181F");
        $("tr td:nth-child(2)").css("background-color", "#17181F");
        $("tr th:nth-child(3)").css("background-color", "transparent");
        $("tr td:nth-child(3)").css("background-color", "transparent");
        $("tr th:nth-child(4)").css("background-color", "transparent");
        $("tr td:nth-child(4)").css("background-color", "transparent");
        
    } 
    else if( y === 3)
    {
        PriceBtn2.style.border = '2px solid white';
        PriceBtn1.style.border = '1px solid rgba(255, 255, 255, 0.402)';
        PriceBtn3.style.border = '1px solid rgba(255, 255, 255, 0.402)';
        $("tr th:nth-child(3)").css("background-color", "#17181F");
        $("tr td:nth-child(3)").css("background-color", "#17181F");
        $("tr th:nth-child(2)").css("background-color", "transparent");
        $("tr td:nth-child(2)").css("background-color", "transparent");
        $("tr th:nth-child(4)").css("background-color", "transparent");
        $("tr td:nth-child(4)").css("background-color", "transparent");
    }
    else{
        PriceBtn3.style.border = '2px solid white';
        PriceBtn2.style.border = '1px solid rgba(255, 255, 255, 0.402)';
        PriceBtn1.style.border = '1px solid rgba(255, 255, 255, 0.402)';
        $("tr th:nth-child(4)").css("background-color", "#17181F");
        $("tr td:nth-child(4)").css("background-color", "#17181F");
        $("tr th:nth-child(3)").css("background-color", "transparent");
        $("tr td:nth-child(3)").css("background-color", "transparent");
        $("tr th:nth-child(2)").css("background-color", "transparent");
        $("tr td:nth-child(2)").css("background-color", "transparent");
    }
}
