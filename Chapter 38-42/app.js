// Task 1

function power(a,b){
    a += b-a;
    return a
}
console.log(power(1,5));



// Task 2
var year = +prompt("Please enter year to check whether the year is leap or not")
var d = new Date();
var result;
if((d.getFullYear()-year) < 0){
    result = (d.getFullYear()-year)*-1
}
else{
    result = (d.getFullYear()-year)*-1
}

if((result%4)==0){
    console.log("the year is leap")

}
else{
    console.log("the year is not leap")
}



// Task 4
function mainFunction(sub1Marks,sub2Marks,sub3Marks){
    var totalMarks = 100*3
    var marksObtained = sub1Marks+sub2Marks+sub3Marks
    alert("Total Marks: "+totalMarks+"\nMarksObtained: "+marksObtained+"\nAverage: "+getAverage(marksObtained,3)+"\nPercentage: "+getPercentage(totalMarks,marksObtained))

}
function getAverage(oMarks,subjects){
    return oMarks/subjects
}

function getPercentage(tMarks,oMarks){
    var perc = (oMarks/tMarks)*100
    return String(perc)+"%"
}
mainFunction(+prompt("Please enter marks for subject1"),+prompt("Please enter marks for subject1"),+prompt("Please enter marks for subject1"))



// Task 5
var str1 = "AsifAhmed"
function indexOfNew(str,element){
    var resultIndex =-1;
    for(var i=0; i<str.length;i++){
        if(element==str[i]){
            resultIndex = i;
            break
            // console.log(str[i])
        }
        else{
            resultIndex = -1
        }
    }
    return resultIndex
}

console.log(indexOfNew(str1,"s"));



// Task 6

var vowels = ["a","e","i","o","u"]
function deleteVowels(sentence){
    var sentOriginal = sentence;
    var sentResult = ""
    var sent1 = sentence.toLowerCase()
    var status = false
    for(var i = 0; i<sent1.length;i++){
        for(var j=0;j<vowels.length;j++){
            if(sent1[i]==vowels[j]){
                // console.log("vowels need to be deleted",i)
                status = false;
                break
                
            }
            else{
                status = true;      
            }
            
        }   
        if(status==true)
        {
            sentResult+=sentOriginal[i]
        }    
    }
    return sentResult
}

console.log(deleteVowels("My name is asif ahmed"))


// Task 7

var vowels = ["a","e","i","o","u"]
function searchVowels(sentence){
    var resultVowels = [];
    var lastVowelsIndex;
    var sentOriginal = sentence
    for(var i = 0; i<sentOriginal.toLowerCase().length;i++){
        for(var j =0;j<vowels.length;j++){
            if(sentOriginal[i]==vowels[j]){
               
               if(lastVowelsIndex==(i-1)){
                    resultVowels.push(sentOriginal[i-1])
                    resultVowels.push(sentOriginal[i])
               }
               lastVowelsIndex = i;
            }          
        }
        // console.log(sentOriginal[i])
    }
    return resultVowels;
}

console.log(searchVowels("ss ff gg ee ff gg yy ii oo"))

// Task 8

function meter(km){
    return (km*1000)
}
function feet(km){
    return (km*3280.84)
}

function inches(km){
    return (km*39370.1)
}

function cent(km){
    return (km*100000)
}
var distance = +prompt("Please enter distance in kilometer")
document.write("<p>Distance in Meter: "+meter(distance)+"<p>")
document.write("<p>Distance in Feet: "+feet(distance)+"<p>")
document.write("<p>Distance in Inches: "+inches(distance)+"<p>")
document.write("<p>Distance in Centimeter: "+cent(distance)+"<p><br><br>")


// Task 9

function overTime(hours){
    var actualHours = Math.floor(hours)
    var rate = 12
    if(actualHours>40){
        document.write("<p>Overtime is "+(actualHours-40)*rate+"<p>")
        
    }
    else{
        document.write("<p>Not eligible for overtime<p>")
    }
}
overTime(45.5)


// Task 10
function changeRequired(amount){
    var hundred = 0
    var fifty = 0
    var ten = 0
    
    if(amount>=100){
        hundred = parseInt(amount/100)
        fifty = parseInt((amount - (100*hundred))/50)
        ten = parseInt((amount-((fifty*50)+(100*hundred)))/10)
    }
    else if(amount>50){
        fifty = parseInt(amount/50)
        ten = parseInt(amount-(fifty*50))/10

    }
    else if(amount<50){
        ten = parseInt(amount/10)
    }
    // console.log(hundred,fifty,ten)
    document.write("<p>You have "+hundred+" hundred notes "+fifty+" fifty notes "+ten+" ten notes<p>")
}
changeRequired(470)
