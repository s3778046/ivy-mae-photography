// Declare and initialise variables for gallery functions.
const showMore = document.querySelector('.show-more');
const showLess = document.querySelector('.show-less');
const editorialGallery = document.querySelector('.gallery-editorial');
const portraitureGallery= document.querySelector('.gallery-portraiture');


// Event listener on editorial tab.
showMore.addEventListener("click", function() {

    // Change portraiture gallery to display grid, showLess to display block and showMore to display none.
    portraitureGallery.style.display = 'grid';
    showMore.style.display = 'none';
    showLess.style.display = 'block';
});

// Event listener on portraiture tab.
showLess.addEventListener("click", function() {

    // Change portraiture gallery to display none, showLess to display none and showMore to display block.
    portraitureGallery.style.display = 'none';
    showMore.style.display = 'block';
    showLess.style.display = 'none';
});


// Function to close the dropdown menu.
function openMobileMenu() {
    document.querySelector('.mobile-navigation-menu').style.display = 'block';
}

// Function to close the dropdown menu.
function closeMobileMenu() {
    document.querySelector('.mobile-navigation-menu').style.display = 'none';
}

// Declare and initialise variables for Testimonial functions.
const testIconOne = document.querySelector('.test-icon-one');
const testIconTwo = document.querySelector('.test-icon-two');
const testIconThree = document.querySelector('.test-icon-three');
const commentOne = document.querySelector('.comment-one');
const commentTwo = document.querySelector('.comment-two');
const commentThree = document.querySelector('.comment-three');

// Event listener on test icon one.
testIconOne.addEventListener("click", function() {

    // Get all testimonial icon elements and replace active class of all with no class.
    var testIcons = document.getElementsByClassName("icon");
    for (i = 0; i < testIcons.length; i++) {
        testIcons[i].className = testIcons[i].className.replace(" active-comment", "");
    }

    // Add active class to testimonial icon one.
    testIconOne.className += " active-comment";

    // Change comment one to disply block and the rest of the comments to display none.
    commentOne.style.display = 'block';
    commentTwo.style.display = 'none';
    commentThree.style.display = 'none';
});

// Event listener on test icon two.
testIconTwo.addEventListener("click", function() {

    // Get all testimonial icon elements and replace active class of all with no class.
    var testIcons = document.getElementsByClassName("icon");
    for (i = 0; i < testIcons.length; i++) {
        testIcons[i].className = testIcons[i].className.replace(" active-comment", "");
    }

    // Add active class to testimonial icon two.
    testIconTwo.className += " active-comment";

    // Change comment two to disply block and the rest of the comments to display none.
    commentOne.style.display = 'none';
    commentTwo.style.display = 'block';
    commentThree.style.display = 'none';
});

// Event listener on test icon three.
testIconThree.addEventListener("click", function() {

    // Get all testimonial icon elements and replace active class of all with no class.
    var testIcons = document.getElementsByClassName("icon");
    for (i = 0; i < testIcons.length; i++) {
        testIcons[i].className = testIcons[i].className.replace(" active-comment", "");
    }

    // Add active class to testimonial icon three.
    testIconThree.className += " active-comment";

    // Change comment three to disply block and the rest of the comments to display none.
    commentOne.style.display = 'none'
    commentTwo.style.display = 'none';
    commentThree.style.display = 'block';
});
