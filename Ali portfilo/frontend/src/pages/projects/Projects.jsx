import React from "react";
import "./Project.css";

const images = [
    // "http://evokeweb.tech/wp-content/uploads/2024/06/1.png.webp",
    "./src/images/1.png (1).webp",
  "http://evokeweb.tech/wp-content/uploads/2024/06/screencapture-strengthbuds-store-2024-06-01-22_40_34.png.webp",
  "http://evokeweb.tech/wp-content/uploads/2024/06/darksmokes.png.webp",
  "http://evokeweb.tech/wp-content/uploads/2024/06/ZeelWear.png.webp",
  "http://evokeweb.tech/wp-content/uploads/2024/06/Towel-Tumb.png.webp",
  "http://evokeweb.tech/wp-content/uploads/2024/06/OGN-Leads.png.webp",
  "http://evokeweb.tech/wp-content/uploads/2024/06/cbc.png.webp",
  "http://evokeweb.tech/wp-content/uploads/2024/06/haroonbrothers.com_.pk_.png.webp",
   "http://evokeweb.tech/wp-content/uploads/2024/06/sea-strike.png.webp",
    "http://evokeweb.tech/wp-content/uploads/2024/06/usa.png.webp",
     "http://evokeweb.tech/wp-content/uploads/2024/06/dark-car.png.webp",
      "http://evokeweb.tech/wp-content/uploads/2024/06/auto-4-less.png.webp",
       "http://evokeweb.tech/wp-content/uploads/2024/06/water-guyx.png.webp",
        "http://evokeweb.tech/wp-content/uploads/2024/06/parkingblvd.png.webp",
        "http://evokeweb.tech/wp-content/uploads/2024/06/quil-cares.png.webp",
        "http://evokeweb.tech/wp-content/uploads/2024/06/quil-cares.png.webp",
          "http://evokeweb.tech/wp-content/uploads/2024/06/pk-education.png.webp",
            "http://evokeweb.tech/wp-content/uploads/2024/06/i-velive-in-u.png.webp",
              "http://evokeweb.tech/wp-content/uploads/2024/06/golf-cart.png.webp",
                "http://evokeweb.tech/wp-content/uploads/2024/06/Quil-waters.png.webp",
                  "http://evokeweb.tech/wp-content/uploads/2024/06/Quil-Protection.png.webp",
                    "http://evokeweb.tech/wp-content/uploads/2024/06/em-massage.png.webp",
                    "http://evokeweb.tech/wp-content/uploads/2024/06/flip-funds.png.webp",
                    "http://evokeweb.tech/wp-content/uploads/2024/06/leon-k-gilbert.png.webp",
                     "http://evokeweb.tech/wp-content/uploads/2024/06/electronic.png.webp",
                      "http://evokeweb.tech/wp-content/uploads/2024/06/electronic.png.webp",
                       "http://evokeweb.tech/wp-content/uploads/2024/06/light-weight.png.webp",
                        "http://evokeweb.tech/wp-content/uploads/2024/06/el-cardiagnostic.png.webp",
                         "http://evokeweb.tech/wp-content/uploads/2024/06/Dark-Guardz.png.webp",
                          "http://evokeweb.tech/wp-content/uploads/2024/06/creativescu.png.webp",
                           "http://evokeweb.tech/wp-content/uploads/2024/06/derma-institue.png.webp",
                            "http://evokeweb.tech/wp-content/uploads/2024/06/fit-kitchen.png.webp",
                             "http://evokeweb.tech/wp-content/uploads/2024/06/cns-services.png.webp",
                              "http://evokeweb.tech/wp-content/uploads/2024/06/chemsoul.png.webp",
                               "http://evokeweb.tech/wp-content/uploads/2024/06/Digitaledge.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/Digitaledge.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/baubleswithlogo.com_.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/b-octavis.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/aude-acadmy.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/blinds.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/Best-Try.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/aahc.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/AI-future.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/revenue-icon.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/return-guys.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/reno-direct.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/turkeyhomes.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/vuebo.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/tetra-sole.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/taylor-alkaline.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/taylor-alkaline.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/red-thread.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/red-thread.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/optimistic-page.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/optimistic-page.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/La-gina.png.webp",
                                "http://evokeweb.tech/wp-content/uploads/2024/06/korgemaetalu.png.webp",
                                // "http://evokeweb.tech/wp-content/uploads/2024/06/laundry-and-delivery.png.webp",
                            

];

const Projects = () => {
  return (
<>
{/* <Category/> */}
    <div className="portfolio-page" id="projects">
      <div className="portfolio-grid">
        {images.map((img, index) => (
          <div key={index} className="image-container">
            <img src={img} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    </> 
  );
};

export default Projects;


