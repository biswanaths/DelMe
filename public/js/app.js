var moduleurls = {
    'nav-reporting' : 'http://opentsdbdev.cloudapp.net:3000',
    'nav-devicemgmt' : 'http://indiadevres3s.cloudapp.net:8081/sitewhere/admin/sites/list.html',
    'nav-alertrules' : 'http://indiadevres3.cloudapp.net:8070/config'
}

function switchFrame(module) { 
    $("#side-menu > li").removeClass("active");
    $("." + module).addClass("active");
    $("#mainview").attr("src",moduleurls[module]);
}


$(window).load(function() {
    $("#mainview").attr("src",moduleurls['Reporting']);
});
