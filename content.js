var object = $('<table>' +
    '<th><img src="https://drive.google.com/uc?id=14wvWiOH0VYuZb3XfNBXeSutc1527lHPh"></th>' +
    '<th><h1 style="font-size:300%;">Attack!!!</h1></th>' +
    '</table>' +
    '<audio autoplay>\n' +
    '<source src="https://doc-00-bc-docs.googleusercontent.com/docs/securesc/puokjc6e4sc8417b3kqajba5lj2hh5np/0dqducduc0j4al3k9eho239kvbscdtg5/1579104000000/13860595800861010920/13860595800861010920/1XGwcb2nOVtgy8dUnXc5aHUfskPD0Ljeo?authuser=0" type="audio/mp3">\n' +
    '</audio>').hide().delay(1000).show('slow', function () {
    chrome.extension.sendMessage({action: "play"})
});
$('#rcnt').prepend(object);
