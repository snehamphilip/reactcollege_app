import React from 'react'

function About() {
    return (
        <div>
            
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>Profile</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <p>
                                    <p>Sree Buddha College of Engineering, affiliated to APJ Abdul Kalam Technological University, has been par excellence in technical education. The sermons of Lord Buddha gave us a lead to be the flowers of exaltation. The primary objective is to promote education and research in the field of technology and to replenish the skills that get lurked in the budding technocrats. All the members of SBCE push themselves to set the institution as an example to the world. The institution is now accredited by National Board of Accreditation for 4 Undergraduate Programmes and re-accredited with NAAC with effect from Nov 2019.</p>
                                    <h5> Also the college has been conferred Autonomy by the UGC from 2024-25 Academic Year onwards</h5>
                                    <br />
                                    <p>Founded in 2002, Sree Buddha College of Engineering follows the cardinal teaching of Lord Buddha for educating the whole generation imbued with real values of life. The college focuses on the overall personality of students, empowering them to face future challenges. The college has excellent infrastructure, well equipped laboratories with modern instruments to ensure world-class education, and has qualified & well experienced faculty.</p>
                                    <br />
                                    <p>Situated at Pattoor near Pandalam, a rural area of immense scenic beauty, the college is located in a lush green and picturesque landscape spread over an area of land overlooking a panoramic lagoon bordered by hillocks. The environment friendly and serene atmosphere of the campus provides a refreshing ambiance for the mind and soul.</p>
                                    <br />
                                    Listed in Wikipedia: Wikipedia Link about the institution</p>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="card" >
  <img src="https://sbce.ac.in/wp-content/uploads/2017/05/1-1-e1582310189554.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text-centre">[College front view]</p>
  </div>
</div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="card" >
  <img src="https://sbce.ac.in/wp-content/uploads/2017/05/gate2-e1582310432977.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text-centre">[View from entrance/main gate]</p>
  </div>
</div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h2>PROFESSIONAL BODY CHAPTERS & CLUBS</h2>
                            <div className="card-group">
  <div className="card">
    <img src="https://ist2021.ieee-ims.org/wp-content/uploads/sites/5/2020/12/IEEE-Logo-Blue-Display.png" className="card-img-top" alt="..."/>
  </div>
  <div className="card">
    <img src="data:image/png;base64,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" className="card-img-top" alt="..."/>
  </div>
  <div className="card">
    <img src="https://keralainsider.com/wp-content/uploads/2019/07/IEDCimage.png" className="card-img-top" alt="..."/>
  </div>
  <div className="card">
    <img src="https://pbs.twimg.com/profile_images/1719241980247441408/8os9do3V_400x400.jpg" className="card-img-top" alt="..."/>
  </div>
  <div className="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9f1h7GTIOgqMi3b2AH7T9EwjonrLCrOR7WGDImP99g&s" className="card-img-top" alt="..."/>
  </div>
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
