"use strict";

function popupModal(direction){
    const title = document.getElementById('mitchellsoftmodelTitle');
    const bodyContent = document.getElementById('modal_body_content');
   
    if(direction === 'wikiapp'){
        title.innerHTML = `WikiD Downloads`;
        bodyContent.innerHTML = `
        <h1 style="color: #af0a13; text-align: center">WikiD Downloads</h1>
        <center>
            <div>
                Current version: 1.0 <br />
                Release date: 018-11-08
            </div>
        </center>
        <br />
        <p>
        Available as a .app bundle on macOs, an .exe installer on Windows and a
        runnable .jar file on both of these platforms plus Linux.<br />
        Also available on Android via
        <a
            href="https://play.google.com/store/apps/details?id=uk.org.alexmitchell.wikid.android"
            target="_blank">Google Play</a>
        </p>

        <h2 style="color: #af0a13">macOS</h2>
            <p>
            <a href="assets/downloads/WikiD.app.zip" download>WikiD.app.zip</a> (download
            size 61.2 MB)
            </p>
                <p>
                Instructions:<br />Download the file, unzip it (120.4 MB when unzipped), move
                WikiD.app to /Applications then run it.
                </p>
            <p>
            This bundle includes a JRE.&nbsp; If you care about the fact that this takes
            up over 110 MB and you already have a JRE (1.8+) installed, you could use the
            runnable .jar file instead.
            </p>

        <h2 style="color: #af0a13">Windows</h2>
            <p>
            32-bit:&nbsp;
            <a href="assets/downloads/wikid-v1.0-win_32_x86-setup.exe" download=""
                >wikid-v1.0-win_32_x86-setup.exe</a>(7.2 MB)<br />
            64-bit:&nbsp;
            <a href="assets/downloads/wikid-v1.0-win_32_x86_64-setup.exe" download=""
                >wikid-v1.0-win_32_x86_64-setup.exe</a>(7.3 MB)
            </p>
        <p>Instructions:<br />Download the relevant installer, then run it.</p>

        <p>
            Note: This requires Java (a JRE - Java Runtime Environment v1.8 or higher) to
            already be installed.&nbsp; If you don't have this installed, you will be
            prompted to do so and taken to the relevant website during the installation
            process.
        </p>

        <h2 style="color: #af0a13">All platforms (Linux, MacOS, Windows):</h2>
        <p>
        Instructions:<br>
        If you've&nbsp;already got a JRE (1.8+) installed, then
        you're good to go!&nbsp; If you need to install Java,&nbsp;
        <a title="Java download page" target="_blank" href="https://www.java.com/download/">https://www.java.com/download/</a>

        would be a good place to start.
        </p>
        <p>Run the jar using:</p>
        <p>java -jar wikid-v1.0-[platform].jar</p>

        <p>
        A file, <span style="color: #af0a13;">wikid.pref</span> and a directory, <span style="color: #af0a13;">imported_css</span>,
        will be created alongside the jar (or possibly in your home directory,
        depending on your operating system).&nbsp; If you want to move the jar file to
        a new location, make sure that you move these two items with it or your
        preferences and styles will get lost.
        </p>
        <table class="editorDemoTable">
        <thead>
            <tr>
            <td>Platform</td>
            <td>File (download size ~4.5 MB)</td>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Linux 32-bit</td>
            <td>
                <a href="assets/downloads/wikid-v1.0-linux_x86.jar" download
                    >wikid-v1.0-linux_x86.jar</a>
            </td>
            </tr>
            <tr>
            <td>Linux 64-bit</td>
            <td>
                <a href="assets/downloads/wikid-v1.0-linux_x86_64.jar" download
                    >wikid-v1.0-linux_x86_64.jar</a>
            </td>
            </tr>
            <tr>
            <td>macOS</td>
            <td>
                <a href="assets/downloads/wikid-v1.0-mac_os_x86_64.jar" download
                    >wikid-v1.0-mac_os_x86_64.jar</a>
            </td>
            </tr>
            <tr>
            <td>Windows 32-bit</td>
            <td>
                <a href="assets/downloads/wikid-v1.0-win_32_x86.jar" download
                    >wikid-v1.0-win_32_x86.jar</a>
            </td>
            </tr>
            <tr>
            <td>Windows 64-bit</td>
            <td>
                <a href="assets/downloads/wikid-v1.0-win_32_x86_64.jar" download
                    >wikid-v1.0-win_32_x86_64.jar</a>
            </td>
            </tr>
        </tbody>
        </table>`;
    }
    else if(direction === 't&c'){
        title.innerHTML = `Terms & Conditions`;
        bodyContent.innerHTML = `
        <h3>Terms Of Use:</h3>
        <p>
            Throughout this notice, named organisations, refers to any individual or company identified in the
            copyright notice on this web site.<br>
            The data and information contained in the pages on this web site are copyright the named organisations.
            All Rights Reserved.<br>
            The data and information presented on the pages on this web site may not under any circumstances be
            resold or redistributed for compensation of any kind without prior written permission from the named
            organisations. You are entitled to use the information provided on this web site for your own personal
            private use. You may not use any data or information provided on this web site in connection with any
            business or commercial undertaking. You are only entitled to use the information provided on this web
            site in responsible ways and this information may not be used in any malicious, illegal or anti-social
            activity.<br>
            Please note that the information available on this web site, may be incomplete, out of date or
            incorrect. It is therefore essential that you verify all such information before taking any action in
            reliance upon it. It is a condition of us allowing you free access to the material on this web site that
            you accept that the named organisations will not be liable for any action you take in reliance on the
            information held on this web site.<br>
            The named organisations, will not be liable to you under any circumstances whatsoever for any direct,
            indirect, punitive, consequential or special damages arising from your use of this web site.
            Whilst every effort has been made to portray items accurately, slight variations may occur. All
            measurements are approximate and are included for guidance only. E&OE.<br>
            All brand and product names are trademarks, registered trademarks or service marks of their respective
            holders.<br>
            Links to other web sites are provided in good faith and the named organisations are not responsible for
            their content.<br>
            By using this web site, you are deemed to have accepted the above Terms of Use. Your statutory rights
            are not affected by this statement.<br>
            If you have any questions about these terms, or would like further information, please contact us via
            e-mail at @@email
            <br>
            Website Developed by <a href="www.Jonwhewaycode.co.uk">Jonwhewaycode.co.uk</a>
        </p>

        <h3>Website Privacy Policy:</h3>
        <h4>Introduction</h4>
        <p>
            Mitchell Soft Technology LTD respects your privacy and is committed to protecting your personal data and ensuring
            it is used in line with your expectations.<br> This privacy policy explains what personal data we
            collect
            when you use this website, how we use it and how we protect it.<br>
            We keep our privacy policy under regular review, the latest version is published on this page and was
            last updated on 14th November 2020.
        </p>
        <h4>The personal data we collect</h4>

        <h5>Usage Data:</h5>
        <p>As you navigate around our website our website provider records data about your visit; the
            only personal data we collect is your IP address which uniquely identifies a connection to the
            Internet.<br>
            Contact Data: If you choose to contact us using one of the forms or e-mail links found on our website
            then you will need to provide personal data pertinent to your enquiry which typically includes your name
            and e-mail address and/or telephone number.


        <h5>How we use your personal data:</h5>
        <p>
            Usage Data is used to protect the integrity of our service by allowing our website provider to monitor
            how our website is being used and to help prevent malicious activities.
            Contact Data is used to respond to your enquiry.
        </p>

        <h4>Who we share your personal data with</h4>

        <h5>Contact Form:</h5>
        <p>is conducted using EmailJs that takes the data you enter via javascript then sends the
            data to Gmail as the mailing server provider
        </p>
        <p>
            We will never share your personal data with any other organisation to use for their own purposes unless
            required to do so by law.
        </p>

        <h4>How we keep your personal data secure</h4>
        <p>
            We are committed to ensuring that your personal data is secure. In order to prevent unauthorised access
            or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard
            and secure the information we collect online.
        </p>

        <h5>How long we keep your personal data for</h5>
        <p>
            We will only retain your personal data for as long as necessary to fulfil the purposes we collected it
            for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            In some circumstances we may anonymise your personal data (so that it can no longer be associated with
            you) for research or statistical purposes in which case we may use this information indefinitely without
            further notice to you.
        </p>
        <h5>Your rights with respect to your data</h5>
        You have the right to:

        <li>Request a copy of the personal data we hold about you;</li>
        <li>Request we correct any personal data we hold about you that is inaccurate;</li>
        <li>Request we delete or stop processing your personal data.</li>

        <p>Please note that any requests for correction/deletion may be refused due to other requirements
            including, but not limited to, legal or accounting requirements.</p>
        <p>
            If you wish to exercise any of these rights please e-mail @@emails For security reasons
            we may require you to provide proof of your identity and/or additional information that will help us
            respond to your request. We will respond to all legitimate requests within four weeks.
            You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the
            UK supervisory authority for data protection issues (www.ico.org.uk). We would appreciate the
            opportunity to address your concerns before you approach the ICO; please contact us in the first
            instance using the contact details above.
        </p>
        <h4>Cookies and how we use them</h4>
        <p>
            A cookie is a small file which may be placed on your device when you visit a website; this file holds a
            modest amount of data specific to the website and your use of it. Most web browsers automatically accept
            cookies but you can usually modify your browser settings to decline cookies if you prefer; please refer
            to your browser's help facility for further information.
            This site uses cookies only necessary to its workings there are,

            <li>T&C banner</li>
            <li>Fontawsome</li>
        </p>
        <h4>Links to other websites</h4>
        <p>
            Our website includes links to third party websites. We do not control these third party websites and
            clicking on these links may allow third parties to collect or share data about you; we would encourage
            you to familiarise yourself with the privacy policy of any website you visit.
        </p>
        `
    }
}

