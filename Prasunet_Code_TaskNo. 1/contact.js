document.getElementById('supportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const query = document.getElementById('query').value;

    console.log('Email:', email);
    console.log('Query:', query);

    // Clear form fields
    document.getElementById('email').value = '';
    document.getElementById('query').value = '';
    alert('Thank you for your submission!');
});
