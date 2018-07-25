
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