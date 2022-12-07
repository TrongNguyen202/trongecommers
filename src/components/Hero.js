import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const fadeImages = [
  "https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/318104112_1465541630607914_6587047766217150310_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=e0w507SXulkAX8OBcNR&tn=E15XSf9JRWMnXZmV&_nc_ht=scontent.fhan4-3.fna&oh=03_AdSzidm8Wrxpzo-EDVXDdovZXiVx-eVtpvanYJ_bLQGxqQ&oe=63B64829",
  "https://vtv1.mediacdn.vn/thumb_w/650/2016/13502523-1088180927927262-3003688008205644403-o-1469776046698.jpg",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  ];
  
const Hero = () => {
    return (
        <div className="slide-container w-full cursor-pointer mt-2.5 mb-2.5 container" >
        <Fade>
          <div className="each-fade">
            <img className="w-full h-96" src={fadeImages[0]} />
          </div>
          <div className="each-fade">
            <img className="w-full h-96" src={fadeImages[1]} />
          </div>
          <div className="each-fade">
            <img className="w-full h-96" src={fadeImages[2]} />
          </div>
        </Fade>
      </div>
      )
};

export default Hero;
