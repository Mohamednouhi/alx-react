import $ from 'jquery';
import '../css/main.css';
import logo from '../assets/holberton-logo.jpg';

$(document).ready(function() {
    $('body').append('<div id="logo"></div>');
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<p>Copyright - Holberton School</p>');
    $('#logo').css({
        'background-image': `url(${logo})`,
        'background-size': '200px 200px',
        'width': '200px',
        'height': '200px'
    });
});
