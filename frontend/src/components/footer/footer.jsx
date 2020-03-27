import React from 'react';
import footerCss from './_footer.css'

class Footer extends React.Component{

  render(){
    return(
      <div className="footer-container">
        <div className="personal-links">
          <div className="person-name">
            <a className="personal-site" target="_blank" href="https://kaichloe.github.io/">Kaiyip Ho</a>
          </div>

          <div className="links">
            <div><a target="_blank" href="https://www.linkedin.com/in/kaiyip-ho-216230191/"><img className="link-border" src="https://image.flaticon.com/icons/svg/1384/1384088.svg" width="30px" /><span className="label">Linkedin</span></a></div>
            <div><a target="_blank" href="https://github.com/Kaichloe" ><img className="git-border" src="https://image.flaticon.com/icons/svg/1051/1051377.svg" width="30px" /><span className="label">Github</span></a></div>
            <div><a target="_blank" href="https://angel.co/kaiyip-ho" className="fa-angellist"><img className="angel-border" src="https://cdn.freebiesupply.com/logos/large/2x/angellist-logo-svg-vector.svg" width="21px" /><span className="label">AngelList</span></a></div>
          </div>
        </div>

        <div className="personal-links">
          <div className="person-name">
            <a className="personal-site" target="_blank" href="https://neminem1203.github.io/">Paul Tan</a>
          </div>

          <div className="links">
            <div><a target="_blank" href="https://www.linkedin.com/in/tpaul1203/"> <img className="link-border" src="https://image.flaticon.com/icons/svg/1384/1384088.svg" width="30px" /><span className="label">LinkedIn</span></a></div>
            <div><a target="_blank" href="https://github.com/Neminem1203" ><img className="git-border" src="https://image.flaticon.com/icons/svg/1051/1051377.svg" width="30px" /><span className="label">Github</span></a></div>
            <div><a target="_blank" href="https://angel.co/paul-tan-00" className="fa-angellist"><img className="angel-border" src="https://cdn.freebiesupply.com/logos/large/2x/angellist-logo-svg-vector.svg" width="21px" /><span className="label">AngelList</span></a></div>
          </div>
        </div>

        <div className="personal-links">
          <div className="person-name">
            <a className="personal-site" target="_blank" href="">Richard Lim</a>
          </div>

          <div className="links">
            <div><a target="_blank" href="https://www.linkedin.com/in/richard-lim-7100a4a7/"> <img className="link-border" src="https://image.flaticon.com/icons/svg/1384/1384088.svg" width="30px" /> <span className="label">Linkedin</span></a></div>
            <div><a target="_blank" href="https://github.com/rlim92"><img className="git-border" src="https://image.flaticon.com/icons/svg/1051/1051377.svg" width="30px" /><span className="label">Github</span></a></div>
            <div><a target="_blank" href="https://angel.co/rich-lim" className="fa-angellist"><img className="angel-border" src="https://cdn.freebiesupply.com/logos/large/2x/angellist-logo-svg-vector.svg" width="21px" /><span className="label">AngelList</span></a></div>
          </div>
        </div>

        <div className="personal-links">
          <div className="person-name">
            <a className="personal-site" target="_blank" href="https://robromano1.github.io/personal_site/">Rob Romano</a>
          </div>

          <div className="links">
            <div><a target="_blank" href="https://www.linkedin.com/in/robert-romano/" ><img className="link-border" src="https://image.flaticon.com/icons/svg/1384/1384088.svg" width="30px" /><span className="label">Linkedin</span></a></div>
            <div><a target="_blank" href="https://github.com/Robromano1"> <img className="git-border" src="https://image.flaticon.com/icons/svg/1051/1051377.svg" width="30px" /><span className="label">Github</span></a></div>
            <div><a target="_blank" href="https://angel.co/rob_romano" className="fa-angellist"><img className="angel-border" src="https://cdn.freebiesupply.com/logos/large/2x/angellist-logo-svg-vector.svg" width="21px" /><span className="label">AngelList</span></a></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;