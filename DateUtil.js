
/**
 * 获取最近的天数，
 * preDay int 最近7天 ，最近30天
 */
function getRecentlyDays(preDay){
	let nowDate=new Date();//当天
	
	let recentDays=new Array();
	
	for(let i=0;i<preDay;i++){
		let day=nowDate.getDate();
		day=day-1;
		nowDate.setDate(day);
		let dateStr=parseString(nowDate);
		recentDays.push(dateStr);
	}
	recentDays.reverse();
	return recentDays;
	
}

function parseString(date){
	let month=date.getMonth()+1;
	if(month<10){
		month="0"+month;
	}
	let day=date.getDate();
	if(day<10){
		day="0"+day;
	}
	return month+'-'+day;
	
}