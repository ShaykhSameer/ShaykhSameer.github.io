document.getElementById('queryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const query = document.getElementById('query').value;
    
    // Simple validation (you can enhance it as needed)
    if (name && email && query) {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Query:', query);

        // You can send this data to a server or display a success message
        alert('Thank you for your query! We will get back to you soon.');
        
        // Optionally, clear the form fields
        document.getElementById('queryForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});