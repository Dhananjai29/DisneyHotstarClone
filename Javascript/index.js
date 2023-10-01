var splide = new Splide( '#main-carousel', {
    pagination: false,
    arrows: false,
    drag: false,
    autoplay: true,
    interval: 7000,
    type: 'loop',
  } );
  
  
var thumbnails = document.getElementsByClassName( 'thumbnail' );
var current;
  
  
for ( var i = 0; i < thumbnails.length; i++ ) {
  initThumbnail( thumbnails[ i ], i );
}
  
  
function initThumbnail( thumbnail, index ) {
  thumbnail.addEventListener( 'click', function () {
    splide.go( index );
  } );
}
  
  
  splide.on( 'mounted move', function () {
  var thumbnail = thumbnails[ splide.index ];
  
  
  if ( thumbnail ) {
    if ( current ) {
      current.classList.remove( 'is-active' );
    }
  
  
    thumbnail.classList.add( 'is-active' );
    current = thumbnail;
    }
} );
  
  
  splide.mount();


var Navbar = document.getElementById('Navbar'); 
 
function expand(){
  Navbar.style.width = '50%';
}
function shrink(){
  Navbar.style.width = '10%';
}