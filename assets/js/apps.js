appsCollection = [
    // WikiD
    {appimage: 'assets/images/wikid_logo.jpg', appname: 'WikiD', apptext: 'WikiD is a note-taking application. Write the notes in plain text, using "markup" \
    to insert formatting, for example *this would be bold*, then view them with the markup turned into beautifully styled pages.', 
    button1_name: 'View in Google Play store', 
    button1_url: 'https://play.google.com/store/apps/details?id=uk.org.alexmitchell.wikid.android&hl=en&gl=US', 
    modal_button_name: 'Download for Desktop (Windows, Linux, Mac)',
    button_popup: "popupModal('wikiapp')"},
    // // MPH
    // {appimage: 'assets/images/mph_logo.jpg', appname: 'MPH', apptext: 'MPH is a proprietary app, developed and used for a popular pancake house .\
    // It enables customers to customise and order breakfast items through an app rather than with waiting staff.', 
    // button1_name: 'View in Google Play store', 
    // button1_url: 'https://play.google.com/store/apps/details?id=uk.co.mitchellsoft.mph&hl=en&gl=US'},
    // Anchor Alarm
    {appimage: 'assets/images/anchor_alarm_logo.jpg', appname: 'Anchor Alarm', apptext: 'Anchor Alarm is an advanced application, which alerts you to the fact that \
     your vessel\'s anchor may have dragged. Essential for piece of mind whilst at anchor.', 
    button1_name: 'View in Google Play store', 
    button1_url: 'https://play.google.com/store/apps/details?id=uk.co.mitchellsoft.anchoralarm&hl=en&gl=US'},
    // Blue Toothpaste
    {appimage: 'assets/images/blue_toothpaste_logo.jpg', appname: 'Blue Toothpaste', 
    apptext: 'Have you ever wanted to quickly, easily share content from one Bluetooth-enabled device to another, \
    for example a web page address from your phone to your friend\'s tablet? With Blue Toothpaste, that\'s exactly what you can do.',
    button1_name: 'View in Google Play store', 
    button1_url: 'https://play.google.com/store/apps/details?id=uk.co.mitchellsoft.android.bluetoothpaste&hl=en&gl=US'}
];
    

websiteCollection = [
    // The Baggy Soap Company
    {siteImage: 'assets/images/baggy-soap-logo-original.png' ,
    siteName: 'The Baggy Soap Company',
    siteInfo: 'The Baggy Soap Company is an e-Commerce website, selling high quality cosmetic products.',
    siteUrlName: 'www.baggysoap.co.uk',
    siteUrl: 'http://www.baggysoap.co.uk/catalogue/'},
    // Benjamin Shepherd
    {siteImage: 'assets/images/benshep.jpg',
    siteName: 'Benjamin Shepherd', 
    siteInfo: 'A complementary website showcasing the skill & talent of Benjamin Shepherd.',
    siteUrlName: 'www.benjaminshepherd.com',
    siteUrl: 'http://www.benjaminshepherd.com/'},

];

$(document).ready(function(){

    for(let i = 0; i < appsCollection.length; i++){
        let image = appsCollection[i].appimage;
        let names = appsCollection[i].appname;
        let text = appsCollection[i].apptext;
        let but_1_name = appsCollection[i].button1_name;
        let but_2_name = appsCollection[i].button2_name;
        let but_1_url = appsCollection[i].button1_url;
        let but_2_url = appsCollection[i].button2_url;
        let but_modal_name = appsCollection[i].modal_button_name;
        let but_modal_popup = appsCollection[i].button_popup;

        if (but_1_name){bt1 = `<a class="card-a" href="${but_1_url}" target="_blank">${but_1_name}</a><br>`}
        else{bt1 = ''};
        if (but_2_name){bt2 = `<hr><a class="card-a" href="${but_2_url}" target="_blank">${but_2_name}</a>`}
        else{bt2 = ''};
        if(but_modal_name){bt3 = `<hr><a class="card-a" onclick="${but_modal_popup}" type="button" 
                                    data-toggle="modal" data-target="#popupModal" ><span class="tcColor">${but_modal_name}</span></a>`}
        else{bt3 = ''};
        
        document.getElementById('display-apps').innerHTML += `<div class="col-lg-4 col-md-6 mx-auto card-col"><div class="card">
        <img class="card-img-top" id="cardImageSrc" src="${image}" alt="app ${names}">
        <div class="card-body"><h5 class="card-title">${names}</h5>
        <p class="card-text">${text}</p>${bt1}${bt2}${bt3}</div></div></a></div>`;
    };

    for(let i = 0; i < websiteCollection.length; i++){
        let image = websiteCollection[i].siteImage;
        let name = websiteCollection[i].siteName;
        let info = websiteCollection[i].siteInfo;
        let urlname = websiteCollection[i].siteUrlName;
        let url = websiteCollection[i].siteUrl;

        document.getElementById('display-websites').innerHTML += `<div class="col-lg-4 col-md-6 mx-auto card-col">
        <a class="card-a" href="${url}" target="_blank"><div class="card card-websites">
        <img class="card-img-top" id="cardImageSrc" src="${image}" alt="app ${name}">
        <div class="card-body"><h5 class="card-title">${name}</h5><p>${urlname}</p>
        <p class="card-text">${info}</p></div></div></a></div>`;
    }

})
