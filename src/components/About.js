import User from './User';
import UserClass from './UserClass';

const About = () => {
    return(
        <div>
            <h2>About Page</h2>
           <User/>
           <UserClass   name={"Priyanka"} age={25} location={"Bengaluru"}/>
        </div>
    )
}

export default About;