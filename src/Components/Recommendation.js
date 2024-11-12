
import two from "../assest/images/python.jpg"
import three from "../assest/images/fullstack.jpg"
import four from "../assest/images/java.jpg"
import five from "../assest/images/Automation Testing.jpg"

function Recommendation(){
    return(
        <div className="Recommendation">
            <h1 className="Recommendation__title">All the skills you need in one place</h1>
            <p>From critical skills to technical topics, Udemy supports your professional development.</p>
            <div className="Recommendation__container">
                <div className="Courses__card">
                    <img src={two} alt="pythonimg"></img>
                    <h3>Python Developer</h3>
                    <p>Andrew Knight</p>
                    <p>4.99 </p>
                    <p>₹499 <del>1999</del></p>
                </div>
                <div className="Courses__card">
                    <img src={three} alt="pythonimg"></img>
                    <h3>Fullstack Developer Bootcamp 2024</h3>
                    <p> Riaz Ahmed</p>
                    <p>4.99 </p>
                    <p>₹499 <del>1999</del></p>
                </div>
                <div className="Courses__card">
                    <img src={four} alt="pythonimg"></img>
                    <h3>Python Developer</h3>
                    <p>James Gosling</p>
                    <p>4.99 </p>
                    <p>₹499 <del>1999</del></p>
                </div>
                <div className="Courses__card">
                    <img src={five} alt="pythonimg"></img>
                    <h3> Alan Richardson</h3>
                    <p>Andrew Knight</p>
                    <p>4.99 </p>
                    <p>₹499 <del>1999</del></p>
                
                </div>
                <div className="Courses__card">
                    <img src={two} alt="pythonimg"></img>
                    <h3>Python Developer</h3>
                    <p>Andrew Knight</p>
                    <p>4.99 </p>
                    <p>₹499 <del>1999</del></p>
                </div>
                <div className="Courses__card">
                    <img src={three} alt="pythonimg"></img>
                    <h3>Fullstack Developer Bootcamp 2024</h3>
                    <p> Riaz Ahmed</p>
                    <p>4.99 </p>
                    <p>₹499 <del>1999</del></p>
                </div>
                <div className="Courses__card">
                    <img src={two} alt="pythonimg"></img>
                    <h3>Python Developer</h3>
                    <p>James Gosling</p>
                    <p>4.99 </p>
                    <p>₹499 <del>1999</del></p>
                </div>
                <div className="Courses__card">
                    <img src={three} alt="pythonimg"></img>
                    <h3> Alan Richardson</h3>
                    <p>Andrew Knight</p>
                    <p>4.99 </p>
                    <p>₹499 <del>1999</del></p>
                </div>

            </div>
        </div>
    )
  }

export default Recommendation