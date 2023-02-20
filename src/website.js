import "./website.css"
import img from "./New folder/horse.png"
import {AiFillStar} from 'react-icons/ai'
import {MdLibraryBooks}from 'react-icons/md'
import {TbWorld} from 'react-icons/tb'
import {GiBrain} from 'react-icons/gi'
import img2 from './New folder (6)/flex.jpg'
import img3 from './New folder (7)/web design.jpg'
import img4 from './New folder (8)/chatbot.jpg'
import arrow  from './New folder (9)/arrow.png'
import facebook from './facebook/facebook.png'
import twitter from './twitter/twitter.png'
import instagram from './instagram/instagram.png'
import {BiMenu} from 'react-icons/bi'

const Website = () => {
   return (

      <>
      <div className="container">

         <div className="mainDiv">

            <div className="navbar">
               <img src={img} />
            </div>
            <div className="links">
               <ul className="ul" >
                  <li>home</li>
                  <li>about</li>
                  <li>services</li>
                  <li>contact</li>
               </ul>

            </div>
      </div>
            
<div>
<div className="firstmain">
   <p className="para1">
   Asra Soft
   </p>
   <p className="para2">
   Ingenuity and perfection, from ideation to creation!
   </p>
</div>

<div className="firstmain2">
   <p className="para3">
   IT business solution-based <br></br>
    Software Company
   </p>
   <p className="para4">
   Our primary services include mobile app development and web <br></br>
    development. We are a flexible group of designers and developers <br></br>
     who specialize in accelerating the creation of digital goods for  <br></br>
      startups and already running a business
   </p>
</div>

</div>
      


<div>

   <div>
      <p className="head2">
      Our Clients
      </p>
      </div>
      <div className="imagesmain">
      <img className="arrowimage1" src = {arrow}/>
      <img className="arrowimage2" src = {arrow}/>
      </div>
      
      <h2 className="vertical">
         Vertical We Serve
      </h2>
      <div className="threeimg">
      <img src={img} /> 
      <img src={img} />
      <img src={img} />
      </div>
   </div>


<div className="iconmain">

<div>
  <div className="mainicons">
<AiFillStar/>
 <p className="innertext"> Construction History  </p>
  </div>
  
  <div className="icontext">
  Duis aute irure dolor in reprehenderit
   in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint
     occaecat cupidatat.
  </div>

</div>

<div>
<div className="mainicons">
<MdLibraryBooks/>
<p className="innertext"> Real estate  </p>
  </div>
  
  <div className="icontext">
  Duis aute irure dolor in reprehenderit
   in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint
     occaecat cupidatat.
  </div>
</div>

<div>
<div className="mainicons">
<TbWorld/>
<p className="innertext">Tourists and Travelers</p>
  </div>
  
  <div className="icontext">
  Duis aute irure dolor in reprehenderit
   in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint
     occaecat cupidatat.
  </div>
</div>
</div>


<div className="medicalmain">
<div>
 <div className="medical">
<GiBrain/>
<p className="innertext2">Medical</p>
 </div>
 
 <div className="medicaltext">
 Duis aute irure dolor in reprehenderit <br></br>
   in voluptate velit esse cillum dolore <br></br>
    eu fugiat nulla pariatur. Excepteur sint <br></br>
     occaecat cupidatat.
 </div>  
</div>
</div>


<div className="middle">
   <div>
<h2 className="middlehead">Why Choose Us</h2>
   </div>
   <div>
<p className="middlehead2">We at Asra Soft provide the following solutions for local as well as
 international SME client needs </p>
   </div>
</div>


<div className="flexmain">
<div>
   <h2 className="development">Mobile Application Development</h2>
<div className="control">
   <p className="developmentpara">
      Mobile app development is the act or process by <br></br>
    which a mobile app is developed for mobile devices, <br></br>
     such as personal digital assistants, enterprise <br></br>
      digital assistants or mobile phones.These software <br></br>
       applications are designed to run on mobile devices, <br></br>
        such as a smartphone or tablet computers</p>
</div>
</div>


<div>
<img className="fleximage" src = {img2}/>
</div>
</div>


<div className="flexmain2">

<div>
<img className="fleximage2" src = {img3}/>
</div>


<div>
   <h2 className="development">Mobile Application Development</h2>
<div className="control">
   <p className="developmentpara2">
      Mobile app development is the act or process by <br></br>
    which a mobile app is developed for mobile devices, <br></br>
     such as personal digital assistants, enterprise <br></br>
      digital assistants or mobile phones.These software <br></br>
       applications are designed to run on mobile devices, <br></br>
        such as a smartphone or tablet computers</p>
</div>
</div>
</div>




<div className="flexmain">
<div>
   <h2 className="development">Mobile Application Development</h2>
<div className="control">
   <p className="developmentpara">
      Mobile app development is the act or process by <br></br>
    which a mobile app is developed for mobile devices, <br></br>
     such as personal digital assistants, enterprise <br></br>
      digital assistants or mobile phones.These software <br></br>
       applications are designed to run on mobile devices, <br></br>
        such as a smartphone or tablet computers</p>
</div>
</div>


<div>
<img className="fleximage" src = {img2}/>
</div>
</div>




      </div>
      </>
)
}

export default Website