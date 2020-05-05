// Generates a Trianglify background
var generatePattern = function() {
    var pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 60,
        palette: {
            RdYlBu: Trianglify.colorbrewer.RdYlBu
        }
    });

    var canvas = pattern.canvas();
    canvas.id = 'background';

    // Remove old canvas
    var oldCanvas = document.getElementById('background');
    if (oldCanvas) {
        document.body.removeChild(oldCanvas);
    }

    // Append new canvas
    document.body.appendChild(canvas);
};

// Generate a background as soon as possible
generatePattern();

// Data
var birthday = new Date('1997-06-11');
var age = (new Date(Date.now() - birthday.getTime())).getUTCFullYear() - 1970;
var links = {
    email: 'mailto:daniel@huisman.me',
    github: 'https://github.com/DanielHuisman',
    gitlab: 'https://gitlab.com/DanielHuisman',
    bitbucket: 'https://bitbucket.org/DanielHuisman',
    linkedin: 'https://linkedin.com/in/dajhuisman'
};

// On window load handler
jQuery(function($) {
    // Window resize handlers
    $(window).resize(generatePattern);

    // Initialize modals
    $('.modal').modal({
        show: false
    });

    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Initialize social icons
    $('[data-social]').each(function() {
        $(this).click(function() {
            // Open URL in current tab
            window.location = links[this.attributes.getNamedItem('data-social').value];
        });
    });

    // Click handler for contact me button
    $('#contact-me').click(function() {
        $('#contact-me-modal').modal('show');
    });
});
