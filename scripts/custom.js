function v2dropDown(a) {
    this.$v2dropDown = $j("" + a + ""), this.$container = this.$v2dropDown.find("ul"), this.$listItems = this.$v2dropDown.find("li"), this.activeItemIndex = 0, this.dropDownActive = !1
}
v2dropDown.prototype = {
    constructor: v2dropDown,
    init: function() {
        this.eventonings()
    },
    eventonings: function() {
        var a = this;
        $j("body").click(function() {
            a.dropDownActive && a.close();
            return
        }), $j(window).scroll(function() {
            a.dropDownActive && a.close()
        }), this.$v2dropDown.mouseleave(function() {
            a.close()
        }), this.$container.click(function(b) {
            b.stopPropagation(), a.dropDownActive ? a.close() : a.open()
        }), this.$listItems.click(function(b) {
            a.dropDownActive && (b.stopPropagation(), a.selectItem($j(this)))
        }), this.$listItems.find("a").click(function(a) {
            a.stopPropagation()
        })
    },
    selectItem: function(a) {
        this.$listItems.removeClass("active"), a.addClass("active"), this.activeItemIndex = a.index(), this.close()
    },
    close: function() {
        this.$v2dropDown.removeClass("active"), this.$listItems.eq(this.activeItemIndex).addClass("active"), this.dropDownActive = !1
    },
    open: function() {
        this.$v2dropDown.addClass("active"), this.$listItems.removeClass("active"), this.dropDownActive = !0
    }
}, $j(function() {
    var a = new v2dropDown("#internationalNumbersDrop");
    a.init()
});
$j(function() {
    var a = new v2dropDown("#internationalNumbersDrop");
    a.init()
});

$j("#gform_submit_button_9").click(function(){
var fullname = $j('#input_9_1').val();
var email  = $j('#input_9_2').val();
var pageURL = $j(location).attr("href");
var link = document.createElement("a");
if ((fullname)  &&  (email)){
if(pageURL == 'https://www.paradisosolutions.com/downloads/elearning-solution-brochure')
{
var filename='https://www.paradisosolutions.com/downloadpdf/Paradiso_Corporate_eLearning_Suite_Brochure.pdf';
link.download='Paradiso_Corporate_eLearning_Suite_Brochure';
link.href=filename;
link.click();
}
if(pageURL == 'https://www.paradisosolutions.com/downloads/corporate-brochure')
{
var filename='https://www.paradisosolutions.com/downloadpdf/paradiso-lms-corporate-brochure.pdf';
link.download='paradiso-lms-corporate-brochure';
link.href=filename;
link.click();
}
if(pageURL == 'https://www.paradisosolutions.com/lms-theme-design')
{
var filename='https://www.paradisosolutions.com/downloadpdf/moodle-samples.pdf';
link.download='moodle-samples';
link.href=filename;
link.click();
}
if(pageURL == 'https://www.paradisosolutions.com/salesforce-lms-download-brochure')
{
var filename='https://www.paradisosolutions.com/downloadpdf/salesforce-lms-brochure.pdf';
link.download='salesforce-lms';
link.href=filename;
link.click();
}
if(pageURL == 'https://www.paradisosolutions.com/downloads/educational-brochure')
{
var filename='https://www.paradisosolutions.com/downloadpdf/paradiso-lms-education-brochure.pdf';
link.download='LMS-Education';
link.href=filename;
link.click();
}
if(pageURL == 'https://www.paradisosolutions.com/download-rfp-template')
{
var filename='https://www.paradisosolutions.com/downloadpdf/download-LMS-RFP-Template.pdf';
link.download='LMS-RFP_Template';
link.href=filename;
link.click();
}
if(pageURL == 'https://www.paradisosolutions.com/downloads/paradiso-solutions-course-catalog-brochure')
{
var filename='https://www.paradisosolutions.com/downloadpdf/Paradiso-Solutions-Course-Catalog.pdf';
link.download='Course-Catalog-Brochure';
link.href=filename;
link.click();
}
if(pageURL == 'https://www.paradisosolutions.com/downloads/paradiso-composer-brochure-for-corporate')
{
var filename='https://www.paradisosolutions.com/downloadpdf/Paradiso-Composer-Brochure.pdf';
link.download='Paradiso-Composer';
link.href=filename;
link.click();
}
if(pageURL == 'https://www.paradisosolutions.com/How-to-Choose-the-Best-LMS')
{
var filename='https://www.paradisosolutions.com/downloadpdf/How-to-Choose-the-Best-LMS.pdf';
link.download='The-Best-LMS';
link.href=filename;
link.click();
}
if(pageURL == 'https://www.paradisosolutions.com/brochure-lms-hosting')
{
var filename='https://www.paradisosolutions.com/downloadpdf/Brochure-LMS-Hosting.pdf';
link.download='LMS-Hosting';
link.href=filename;
link.click();
}
if(pageURL == 'https://www.paradisosolutions.com/lms-for-trainers-presentation')
{
var filename='https://www.paradisosolutions.com/downloadpdf/lms-for-trainers.pdf';
link.download='LMS-for-Trainers';
link.href=filename;
link.click();
}
window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
}
});
//Casestudy popup download pdf
$j("#gform_submit_button_18").click(function(){
var link = document.createElement("a"); 
var fullname = $j('#input_18_1').val();
var emailid  = $j('#input_18_2').val();
var phoneno = $j('#input_18_7').val();
var phoneReg=/^(?=.*?[1-9])[0-9()+ -]+$/;
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
if((!emailReg.test(emailid)) && (!phoneReg.test(phoneno)))
{ }
else if ((fullname) && (emailid) && (phoneno))  {
var filename='/downloadpdf/casestudies/Government-Organization-Casestudy.pdf';
link.download='Government-Organization-Casestudy';
link.href=filename;
link.click();
}
});
$j("#gform_submit_button_19").click(function(){
var fullname = $j('#input_19_1').val();
var emailid  = $j('#input_19_2').val();
var link = document.createElement("a");
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
var phoneno = $j('#input_19_7').val();
var phoneReg=/^(?=.*?[1-9])[0-9()+ -]+$/;
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
if((!emailReg.test(emailid)) && (!phoneReg.test(phoneno)))
{ }
else if ((fullname) && (emailid) && (phoneno))  {
var filename='/downloadpdf/casestudies/NonProfit-Charitables-Casestudy.pdf';
link.download='NonProfit-Charitables-Casestudy';
link.href=filename;
link.click();
}
});
$j("#gform_submit_button_20").click(function(){
var fullname = $j('#input_20_1').val();
var emailid  = $j('#input_20_2').val();
var link = document.createElement("a");
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var phoneno = $j('#input_20_7').val();
var phoneReg=/^(?=.*?[1-9])[0-9()+ -]+$/;
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
if((!emailReg.test(emailid)) && (!phoneReg.test(phoneno)))
{ }
else if ((fullname) && (emailid) && (phoneno))  {
var filename='/downloadpdf/casestudies/Retail-Consumer-Goods-Casestudy.pdf';
link.download='Retail-Consumer-Goods-Casestudy';
link.href=filename;
link.click();
}
});
$j("#gform_submit_button_21").click(function(){
var fullname = $j('#input_21_1').val();
var emailid  = $j('#input_21_2').val();
var link = document.createElement("a");
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
var phoneno = $j('#input_21_7').val();
var phoneReg=/^(?=.*?[1-9])[0-9()+ -]+$/;
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
if((!emailReg.test(emailid)) && (!phoneReg.test(phoneno)))
{ }
else if ((fullname) && (emailid) && (phoneno))  {
var filename='/downloadpdf/casestudies/Scientific-Research-Casestudy.pdf';
link.download='Scientific-Research-Casestudy';
link.href=filename;
link.click();
}
});
$j("#gform_submit_button_22").click(function(){
var fullname = $j('#input_22_1').val();
var emailid  = $j('#input_22_2').val();
var link = document.createElement("a");
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
var phoneno = $j('#input_22_7').val();
var phoneReg=/^(?=.*?[1-9])[0-9()+ -]+$/;
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
if((!emailReg.test(emailid)) && (!phoneReg.test(phoneno)))
{ }
else if ((fullname) && (emailid) && (phoneno))  {
var filename='/downloadpdf/casestudies/Training-Development-Casestudy.pdf';
link.download='Training-Development-Casestudy';
link.href=filename;
link.click();
}
});
//Exit Intent Popup
$j(document).mousemove(function(e) {
 var isshow = localStorage.getItem('isshow');   
if(e.pageY <= 5)
{
if (isshow== null) {
 localStorage.setItem('isshow', 1);
$j('div#pum-11612').fadeIn();
}}      
});
$j('button.pum-close.popmake-close').click(function(){
$j('div#pum-11612').fadeOut();
});
function SaveToDisk(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        save.download = fileName || 'unknown';

        var evt = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': false
        });
        save.dispatchEvent(evt);

        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    }
}
$j("#gform_submit_button_15").click(function(){
var fullname = $j('#input_15_1').val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
var emailid =  $j('#input_15_2').val();
var phoneno = $j('#input_15_9').val();
if(!emailReg.test(emailid))
{ }
else if ((fullname) && (emailid) && (phoneno))  {
var linkpath ='https://www.paradisosolutions.com/downloadpdf/How-to-Choose-the-Best-LMS.pdf';
SaveToDisk(linkpath, 'BestLMS');
window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
}});

//Download Company Brochure
$j("#gform_submit_button_24").click(function(){
var fullname = $j('#input_24_1').val();
var emailid =  $j('#input_24_2').val();
var phoneno = $j('#input_24_3').val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
if(!emailReg.test(emailid))
{ }
else if ((fullname) && (emailid) && (phoneno)) {
var linkpath ='https://www.paradisosolutions.com/downloadpdf/Paradiso_%20Company_Brochure.pdf';
SaveToDisk(linkpath, 'Company_Brochure');
window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
}});

//Download Best LMS Brochure
$j("#gform_submit_button_25").click(function(){
var fullname = $j('#input_25_1').val();
var emailid =  $j('#input_25_2').val();
var phoneno = $j('#input_25_3').val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
if(!emailReg.test(emailid))
{ }
else if ((fullname) && (emailid) && (phoneno)) {
var linkpath ='https://www.paradisosolutions.com/downloadpdf/How-to-Choose-the-Best-LMS.pdf';
SaveToDisk(linkpath, 'Best-LMS-Brochure');
window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
}});

//Download Training & Development Brochure
$j("#gform_submit_button_23").click(function(){
var fullname = $j('#input_23_1').val();
var emailid =  $j('#input_23_2').val();
var phoneno = $j('#input_23_3').val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
if(!emailReg.test(emailid))
{ }
else if ((fullname) && (emailid) && (phoneno)) {
var linkpath ='https://www.paradisosolutions.com/downloadpdf/employee-training-development-how-to-measure-effectiveness-impact.pdf';
SaveToDisk(linkpath, 'Training&Development-Brochure');
window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
}});

//Download Education Brochure 
$j("#gform_submit_button_28").click(function(){
var fullname = $j('#input_28_1').val();
var emailid =  $j('#input_28_2').val();
var phoneno = $j('#input_28_3').val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
if(!emailReg.test(emailid))
{ }
else if ((fullname) && (emailid) && (phoneno)) {
var linkpath ='https://www.paradisosolutions.com/downloadpdf/paradiso-lms-education-brochure.pdf';
SaveToDisk(linkpath, 'Education-brochure');
window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
}});

//Download eCommerce Brochure
$j("#gform_submit_button_27").click(function(){
var fullname = $j('#input_27_1').val();
var emailid =  $j('#input_27_2').val();
var phoneno = $j('#input_27_3').val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
if(!emailReg.test(emailid))
{ }
else if ((fullname) && (emailid) && (phoneno)) {
var linkpath ='https://www.paradisosolutions.com/downloadpdf/LMS%20Woocommerce%20Integration%20-%20Final.pdf';
SaveToDisk(linkpath, 'Woocommerce-brochure');
window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
}});

//Download Salesforce Brochure
$j("#gform_submit_button_26").click(function(){
var fullname = $j('#input_26_1').val();
var emailid =  $j('#input_26_2').val();
var phoneno = $j('#input_26_3').val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
if(!emailReg.test(emailid))
{ }
else if ((fullname) && (emailid) && (phoneno)) {
var linkpath ='https://www.paradisosolutions.com/downloadpdf/Salesforce%20LMS%20-%20Brochure%20Final.pdf';
SaveToDisk(linkpath, 'Salesforce-Brochure');
window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
}});

//Download capability statement
$j("#gform_submit_button_30").click(function(){
var fullname = $j('#input_30_1').val();
var emailid =  $j('#input_30_2').val();
var phoneno = $j('#input_30_3').val();
var cap = $j('#input_30_8').val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
if(!emailReg.test(emailid))
{ }
else if ((fullname) && (emailid) && (phoneno) && (cap)) {
var linkpath ='https://www.paradisosolutions.com/downloadpdf/rfp-template.pdf';
SaveToDisk(linkpath, 'RFP-Template');
window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
}});

//Download RFP Template
$j("#gform_submit_button_31").click(function(){
var fullname = $j('#input_31_1').val();
var emailid =  $j('#input_31_2').val();
var phoneno = $j('#input_31_3').val();
var cap = $j('#input_31_8').val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
if(!emailReg.test(emailid))
{ }
else if ((fullname) && (emailid) && (phoneno) && (cap)) {
var linkpath ='https://www.paradisosolutions.com/downloadpdf/Capability-Statement.pdf';
SaveToDisk(linkpath, 'Capability-Statement');
window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
}});



/*----------------------- Contact form 7 redirection after submit -------------------------------------*/
document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( 12643 == event.detail.contactFormId || 12679 == event.detail.contactFormId  || 12687== event.detail.contactFormId || 12650 == event.detail.contactFormId || 12652 == event.detail.contactFormId) {             
                   window.location = "/thankyou/";           
    }
    // Download Company Brochure
    if ( 12654 == event.detail.contactFormId ) {
        var linkpath ='https://www.paradisosolutions.com/downloadpdf/Paradiso_%20Company_Brochure.pdf';
    SaveToDisk(linkpath, 'Company_Brochure');
    window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
    
    }
    // Best LMS Brochure AND Exit popup 
    if( 12655 == event.detail.contactFormId || 12661 == event.detail.contactFormId ) {
        var linkpath    ='https://www.paradisosolutions.com/downloadpdf/How-to-Choose-the-Best-LMS.pdf';
        SaveToDisk(linkpath, 'Best LMS');
        window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";    
    }
    //Download Education Brochure
    if( 12665 == event.detail.contactFormId ){
        var linkpath ='https://www.paradisosolutions.com/downloadpdf/paradiso-lms-education-brochure.pdf';
        SaveToDisk( linkpath, 'Education_Brochure' );
        window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
    }
    //Download 'Empower your Training Initiatives' Brochure
    if( 12639 == event.detail.contactFormId ){
        var linkpath ='https://www.paradisosolutions.com/downloadpdf/employee-training-development-how-to-measure-effectiveness-impact.pdf';
        SaveToDisk( linkpath, 'Training & Development' );
        window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
    }
    //Download 'Salesforce-LMS' Brochure
    if( 12662 == event.detail.contactFormId ){
        var linkpath ='https://www.paradisosolutions.com/downloadpdf/Salesforce%20LMS%20-%20Brochure%20Final.pdf';
        SaveToDisk(linkpath, 'Salesforce_LMS');
        window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
    }
    //Download RFP Template
    if( 12688 == event.detail.contactFormId ){
        var linkpath ='downloadpdf/rfp-template.pdf';
        SaveToDisk(linkpath, 'RFP-Template');
        window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
    }
    //Download capability statement
    if( 12685 == event.detail.contactFormId ){
        var linkpath ='downloadpdf/capability-statement.pdf';
        SaveToDisk(linkpath, 'Capability-Statement');
        window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
    }
    // Download 'LMS eCommerce' Brochure
    if( 12664 == event.detail.contactFormId ){
        var linkpath ='https://www.paradisosolutions.com/downloadpdf/LMS%20Woocommerce%20Integration%20-%20Final.pdf';
        SaveToDisk(linkpath, 'Woocommerce-Integration');
        window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
    }
    // CaseStudy Government_casestudy
    if( 12680 == event.detail.contactFormId ){
        var linkpath = 'https://www.paradisosolutions.com/downloadpdf/Government_casestudy.pdf';
        SaveToDisk(linkpath, 'Government_casestudy');
        window.location.href = "https://www.paradisosolutions.com/thankyou/";
    }
    // CaseStudy NonProfit-Charitables-Casestudy
    if( 12681 == event.detail.contactFormId ){
        var linkpath = 'https://www.paradisosolutions.com/downloadpdf/NonProfit_casestudy.pdf';
        SaveToDisk(linkpath, 'NonProfit-Charitables-Casestudy');
        window.location.href = "https://www.paradisosolutions.com/thankyou/";
    }
    // CaseStudy Retail-Consumergoods-Casestudy
    if( 12682 == event.detail.contactFormId ){
        var linkpath = 'https://www.paradisosolutions.com/downloadpdf/Retail_casestudy.pdf';
        SaveToDisk(linkpath, 'Retail-Consumergoods-Casestudy');
        window.location.href = "https://www.paradisosolutions.com/thankyou/";
    }
    // CaseStudy Scientific Research & Development
    if( 12683 == event.detail.contactFormId ){
        var linkpath = 'https://www.paradisosolutions.com/downloadpdf/Scientific_casestudy.pdf';
        SaveToDisk(linkpath, 'Scientificresearch-Casestudy');
        window.location.href = "https://www.paradisosolutions.com/thankyou/";
    }
    // CaseStudy Training & Development
    if( 12684 == event.detail.contactFormId ){
        var linkpath = 'https://www.paradisosolutions.com/downloadpdf/Training_casestudy.pdf';
        SaveToDisk(linkpath, 'Trainingdevelopment-Casestudy');
        window.location.href = "https://www.paradisosolutions.com/thankyou/";
    }
    // Exit popup download
    if( 12661 == event.detail.contactFormId ){
        var linkpath ='https://www.paradisosolutions.com/downloadpdf/How-to-Choose-the-Best-LMS.pdf';
        SaveToDisk(linkpath, 'trial');
        window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
    }

    //  PDF according to pafe URL for download resources
    var pageURL = $j(location).attr("href");    
    if( 12686 == event.detail.contactFormId ){
        if(pageURL == 'https://www.paradisosolutions.com/downloads/elearning-solution-brochure'){
            var filename='https://www.paradisosolutions.com/downloadpdf/Paradiso_Corporate_eLearning_Suite_Brochure.pdf';
            SaveToDisk(filename, 'Paradiso_Corporate_eLearning_Suite_Brochure' );
        }
        if(pageURL == 'https://www.paradisosolutions.com/downloads/corporate-brochure'){
            var filename='https://www.paradisosolutions.com/downloadpdf/paradiso-lms-corporate-brochure.pdf';
            SaveToDisk(filename, 'paradiso-lms-corporate-brochure' );        
        }
        if(pageURL == 'https://www.paradisosolutions.com/lms-theme-design'){
            var filename='https://www.paradisosolutions.com/downloadpdf/moodle-samples.pdf';
            SaveToDisk(filename, 'moodle-samples' );
        }
        if(pageURL == 'https://www.paradisosolutions.com/salesforce-lms-download-brochure'){
            var filename='https://www.paradisosolutions.com/downloadpdf/salesforce-lms-brochure.pdf';
            SaveToDisk(filename, 'salesforce-lms' );
        }
        if(pageURL == 'https://www.paradisosolutions.com/downloadpdf/educational-brochure'){
            var filename='https://www.paradisosolutions.com/downloadpdf/paradiso-lms-education-brochure.pdf';
            SaveToDisk(filename, 'LMS-Education' );
        }
        if(pageURL == 'https://www.paradisosolutions.com/download-rfp-template') {
            var filename='https://www.paradisosolutions.com/downloadpdf/download-LMS-RFP-Template.pdf';
            SaveToDisk(filename, 'LMS-RFP_Template' );
        }
        if(pageURL == 'https://www.paradisosolutions.com/downloads/paradiso-solutions-course-catalog-brochure'){
            var filename='https://www.paradisosolutions.com/downloadpdf/Paradiso-Solutions-Course-Catalog.pdf';
            SaveToDisk(filename, 'Course-Catalog-Brochure' );
        }
        if(pageURL == 'https://www.paradisosolutions.com/downloads/paradiso-composer-brochure-for-corporate'){
            var filename='https://www.paradisosolutions.com/downloadpdf/Paradiso-Composer-Brochure.pdf';
            SaveToDisk(filename, 'Paradiso-Composer' );
        }
        if(pageURL == 'https://www.paradisosolutions.com/How-to-Choose-the-Best-LMS'){
            var filename='https://www.paradisosolutions.com/downloadpdf/How-to-Choose-the-Best-LMS.pdf';
            SaveToDisk(filename, 'The-Best-LMS' );
        }
        if(pageURL == 'https://www.paradisosolutions.com/brochure-lms-hosting'){
            var filename='https://www.paradisosolutions.com/downloadpdf/Brochure-LMS-Hosting.pdf';
            SaveToDisk(filename, 'LMS-Hosting' );
        }
        if(pageURL == 'https://www.paradisosolutions.com/lms-for-trainers-presentation'){
            var filename='https://www.paradisosolutions.com/downloadpdf/lms-for-trainers.pdf';
            SaveToDisk(filename, 'LMS-for-Trainers' );
        }
        window.location.href = "https://www.paradisosolutions.com/thank-you-for-download";
    }
}, false );

/*----------------------- End Contact form 7 redirection after submit -------------------------------------*/

jQuery(document).on('click', '.q_logo a img', function(event) {
    //event.preventDefault();
    //if( jQuery('body').hasClass('page-id-2739') )
        setTimeout( function(){
            console.log('action');
            jQuery('.wrapper_inner > .content.content_top_margin_none > div.content_inner').css('visibility', 'visible');
            jQuery('.vc_row div.element_from_bottom > div, .vc_row div.element_from_top > div, div.element_from_fade > div').css('opacity', '1');
        }, 3000);
});

// Mobile hack: Add an optgroup to every select in order to avoid truncating the content
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var selects = document.querySelectorAll("select");
    for (var i = 0; i < selects.length; i++ ){
        selects[i].appendChild(document.createElement("optgroup"));
    }
}

jQuery(document).ready(function($) {
    
});