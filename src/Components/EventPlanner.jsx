import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';


const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
        <section className='description'>
                <p>
                    Plan and organize your events effortlessly with Event Planner. From
                    birthdays to corporate meetings, we've got you covered.
                </p>
                <button className='get-started-button'>getstarted</button>
        </section>
        <section className='events_categories'>
            <ul>
                <h2>Social Events:</h2>
                <li>Birthday parties</li>
                <li>Anniversary celebration</li>
                <li>Wedding receptions</li>
                <li>Baby Showers</li>
                <li>Graduation parties</li>
                <li>Family reunions</li>
            </ul>
            <ul>
                <h2>Entertainment Events:</h2>
                <li>Concerts</li>
                <li>Music festivals</li>
                <li>Film screening</li>
                <li>Comedy Shows</li>
                <li>Art exhibitions</li>
                <li>Cultural events</li>
            </ul>
            <ul>
                <h2>Community Events:</h2>
                <li>Fundrasing events</li>
                <li>Charity Galas</li>
                <li>Volunteer drives</li>
                <li>Neighbourhood block parties</li>
                <li>Community festibles</li>
                <li>Cultural celebration</li>
            </ul>
        </section>
        <section className='features'>
            <h2>Features</h2>
            <ul>
                <li>Easy event creation and management</li>
                <li>Custoizable event templates</li>
                <li>Guest list management</li>
                <li>Real-time collaboration</li>
                <li>Reminders and notification</li>
            </ul>
        </section>
        <section className='testimonials'>
            <h2>Testimonials</h2>
            <div className='testimonial'>
            <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
            <p className="author">- Emily Johnson</p>
            </div>
            <div>
            <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
            <p className="author">- John Smith</p>
            </div>
        </section>
        <section className='contact'>
            <h2>Contact-us</h2>
            <form>
                <input type='text' placeholder='name'/>
                <input type='email' placeholder='Email'/>
                <textarea placeholder='Message'></textarea>
                <button className='submit-buuton'>send</button>
            </form>
        </section>
        <section>
            <Footer/>
        </section>
        

        </div>
    );
};

export default EventPlanner;
