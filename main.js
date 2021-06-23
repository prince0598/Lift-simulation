var lift_initial_pos=1,lift_curr_pos;
var btn = document.getElementsByClassName("btn-item");
for(let i=0;i<6;i++){
    btn[i].onclick=change;
}
function change()
{
    for (let i=0; i<6; i++)
    {
        btn[i].style.backgroundColor="coral";
        btn[i].style.color="white";
    }
    this.style.backgroundColor="blue";
    this.style.color="pink";
    lift_curr_pos=this.innerHTML;
}
var btn_go = document.getElementsByClassName("btn-go");
btn_go[0].onclick = lift_start;
function lift_start()
{
        var var_lift = document.getElementsByClassName("lift");
        console.log("after btn click curr pos is " + lift_curr_pos);
        if(lift_curr_pos == 1)
            var_lift[0].style.transform = "translateY(-1px)";
        if(lift_curr_pos == 2)
            var_lift[0].style.transform = "translateY(-123px)";
        if(lift_curr_pos == 3)
            var_lift[0].style.transform = "translateY(-246px)";
        if(lift_curr_pos == 4)
            var_lift[0].style.transform = "translateY(-369px)";
        if(lift_curr_pos == 5)
            var_lift[0].style.transform = "translateY(-492px)";
        if(lift_curr_pos == 6)
            var_lift[0].style.transform = "translateY(-618px)";
        var_lift[0].style.transition = "1s linear";
}
