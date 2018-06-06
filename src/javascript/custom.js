/*
 * Slidebars
 */
import slidebars from './vendors/slidebars';

( function ( $ ) {
    // Initialize Slidebars
    var slidebarsController = new slidebars();
    slidebarsController.init();

    $( '#expansionValuesButton' ).click(function ( event ) {
        // Stop default action and bubbling
        event.stopPropagation();
        event.preventDefault();
      
        // Toggle the Slidebar with id 'id-1'
        slidebarsController.open( 'expansionValues' );
      } );

      $( '#values' ).click(function ( event ) {     
        // Toggle the Slidebar with id 'id-1'
        slidebarsController.close( 'expansionValues' );
      } );

      $( '#expansionGetInvolvedLearn' ).click(function ( event ) {
        // Stop default action and bubbling
        event.stopPropagation();
        event.preventDefault();
      
        // Toggle the Slidebar with id 'id-1'
        slidebarsController.open( 'expansionGetInvolved' );
      } );

      $( '#getInvolved' ).click(function ( event ) {     
        // Toggle the Slidebar with id 'id-1'
        slidebarsController.close( 'expansionGetInvolved' );
      } );
    
  } ) ( jQuery );


/*
 * BIO MODAL
 */
// Open Modal
var modalBioOpen = document.getElementsByClassName('modalBioOpen');
for (var i = 0; i < modalBioOpen.length; ++i) {
    modalBioOpen[i].onclick = openModal;
}

// Close the Modal
document.getElementById('modalBioClose').onclick = closeModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalBio) {
        closeModal();
    }
}

function openModal(event) {
    console.log(event, event.target.parentNode.childNodes);
    // Set Data
    document.getElementById('modalBioImg').src = event.target.parentNode.childNodes[0].src;
    document.getElementById('modalBioName').innerText = event.target.parentNode.childNodes[1].innerText;
    document.getElementById('modalBioTitle').innerText = event.target.parentNode.childNodes[2].innerText;
    document.getElementById('modalBioBio').innerText = event.target.parentNode.getAttribute('bio');

    // Prevent Scroll
    document.getElementsByTagName('body')[0].scroll = 'no';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';

    // Show Modal
    document.getElementById('modalBio').style.display = 'block';
    
}

function closeModal() {
    // Prevent Scroll
    document.getElementsByTagName('body')[0].scroll = 'initial';
    document.getElementsByTagName('body')[0].style.overflow = 'initial';
    
    // Show Modal
    document.getElementById('modalBio').style.display = 'none';
}