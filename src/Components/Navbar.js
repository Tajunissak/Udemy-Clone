

function Navbar(){
    return(
      <div className="navbar">
          <div className="navbar--section1">
              <h1 className="navbar--section1__title">Udemy</h1>
          </div>
          <div className="navbar--section2">
              
              <input type="text" placeholder="Search for anything"></input>
          </div>
          <div className="navbar--section3">
              <p>Courses</p>
              <div className="navbar__selection">
                  <p>My Learnings</p>
                  <div className="My__learning">
                      <p>You havent purchased the course</p>
                  </div>
              </div>
          </div>
      </div>
    )
  }

  export default Navbar