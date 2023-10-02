var Year = document.getElementById("yearly");
var Month = document.getElementById("monthly");
var YearBtn = document.getElementById('yearlyBtn');
var MonthBtn = document.getElementById('monthlyBtn');
var PriceBtn1 = document.getElementById('one');
var PriceBtn2 = document.getElementById('two');
var PriceBtn3 = document.getElementById('three');
var Heading1 = document.getElementById('heading1');
var Heading2 = document.getElementById('heading2');
var Heading3 = document.getElementById('heading3');
var TableHead1 = document.getElementById('tableHead1');
var TableHead2 = document.getElementById('tableHead2');
var TableHead3 = document.getElementById('tableHead3');
var SuperTick = document.getElementById('superTick');
var SuperAdTick = document.getElementById('super+Tick');
var PremiumTick = document.getElementById('premiumTick');
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
        Heading1.style.color = '#FFCC75';
        Heading2.style.color = '#707A94';
        Heading3.style.color = '#707A94';
        TableHead1.style.color = '#FFCC75';
        TableHead2.style.color = '#707A94';
        TableHead3.style.color = '#707A94';
        SuperTick.style.display = 'block';
        SuperAdTick.style.display = 'none';
        PremiumTick.style.display = 'none';
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
        Heading2.style.color = '#FFCC75';
        Heading1.style.color = '#707A94';
        Heading3.style.color = '#707A94';
        TableHead2.style.color = '#FFCC75';
        TableHead1.style.color = '#707A94';
        TableHead3.style.color = '#707A94';
        SuperTick.style.display = 'none';
        SuperAdTick.style.display = 'block';
        PremiumTick.style.display = 'none';
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
        Heading3.style.color = '#FFCC75';
        Heading2.style.color = '#707A94';
        Heading1.style.color = '#707A94';
        TableHead3.style.color = '#FFCC75';
        TableHead2.style.color = '#707A94';
        TableHead1.style.color = '#707A94';
        SuperTick.style.display = 'none';
        SuperAdTick.style.display = 'none';
        PremiumTick.style.display = 'block';
        $("tr th:nth-child(4)").css("background-color", "#17181F");
        $("tr td:nth-child(4)").css("background-color", "#17181F");
        $("tr th:nth-child(3)").css("background-color", "transparent");
        $("tr td:nth-child(3)").css("background-color", "transparent");
        $("tr th:nth-child(2)").css("background-color", "transparent");
        $("tr td:nth-child(2)").css("background-color", "transparent");
    }
}
