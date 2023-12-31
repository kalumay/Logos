import React from 'react'

const CarousMin = () => {
  return (
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item" data-bs-interval="2000">
        <img src="./images/logos.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="./images/youth.jpg" alt="..."/>
      </div>
      
      <div class="carousel-item">
        <img src="./images/Fellowship.jpg" alt="..."/>
        {/* <div className="carousel-caption"> */}
        {/* <h3>Los Angeles</h3>
    <p>We had such a great time in LA!</p> */}
           {/* <center><h1>Let's Worship Together</h1>
        <p>Welcome to our church. Join us for a meaningful worship experience.</p></center> */}
        {/* </div> */}
       
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default CarousMin