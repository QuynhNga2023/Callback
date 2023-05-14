var course = [
    'javascript',
    'PHP',
    'Ruby'
]
//ForEach : Lap qua tung phan tu cua mang



//Tao phuong thuc
Array.prototype.forEach2 = function(callback){
    for (var index in this){//duyet qua Element nam trong proto
        if(this.hasOwnProperty(index)){
            callback(this[index],index,this)
        }
    }
}

course.push('Ja')

course.forEach2(function(course,index,array) {
    console.log(course,index,array)
})
