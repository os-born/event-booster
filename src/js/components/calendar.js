import refs from "../refs";

const onOpenCalendar = (e) => {
    if(e.target.classList.contains('calendar-btn')){
        refs.calendar.classList.remove('hide-calendar'); 
    }
        
}

const onCloseCalendar = (e) => {
    console.log(e.target.classList.contains('icon-close-calender'));
    if (e.target.classList.contains('icon-close-calender')){
        refs.calendar.classList.add('hide-calendar');
    }
}
refs.calendarBtn.addEventListener("click", onOpenCalendar);
refs.calendar.addEventListener("click", onCloseCalendar);
