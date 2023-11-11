export class App {
    constructor () {
         const users = [
        { email: 'psicologo@example.com', password: 'password' },
    ];
    
    
    const appointmentTimes = [
        '9:00 AM',
        '10:00 AM',
        '11:00 AM',
        
    ];
    
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
    
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        const user = users.find((u) => u.email === email && u.password === password);
    
        if (user) {
        
        const appointmentTimesPage = window.open('', '_blank');
        appointmentTimesPage.document.write('<h1>Appointment Times</h1>');
        appointmentTimes.forEach((time) => {
            appointmentTimesPage.document.write(`<p>${time}</p>`);
        });
        } else {
        alert('Login failed. Please check your email and password.');
        }

        
    });
}
    
}
   