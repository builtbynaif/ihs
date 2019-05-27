import $ from 'jquery';
import slick from 'slick-carousel';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import HeroSlider from './modules/HeroSlider';
import Responsive from './modules/Responsive';
import SlideOnScroll from './modules/SlideOnScroll';

var mobileMenu = new MobileMenu();
var stickyheader = new StickyHeader();
var modal = new Modal();
var heroSlider = new HeroSlider(); 
var responsive = new Responsive(); 
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%"); 
new SlideOnScroll($(".slideIn"), "75%");