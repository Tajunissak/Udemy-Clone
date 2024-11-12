
import one from "../assest/images/newsaleimg.jpg"

function Saleimg(){
    return(
      <div className="Sale-img">
          <img src={one} alt="salesimg"></img>
          <div class="sale__offer">
              <h2>Flash sale ends with in 24hrs</h2>
              <p>Get  certified Courses at 499 with top certified mentors. grab <br></br>this opportunities learn and become pro in any of the courses.</p>
          </div>
      </div>
    )
  }
  export default Saleimg