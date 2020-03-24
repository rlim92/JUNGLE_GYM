import React from 'react';
import footerCss from './_footer.css'

class Footer extends React.Component{

  render(){
    return(
      <div class="footer-container">
        <div class="personal-links">
          <div class="person-name">
            <a class="personal-site" target="_blank" href="https://kaichloe.github.io/">Kaiyip Ho</a>
          </div>

          <div class="links">
            <div><a target="_blank" href="https://www.linkedin.com/in/kaiyip-ho-216230191/"><img class="link-border" src="https://image.flaticon.com/icons/svg/1384/1384088.svg" width="30px" /><span class="label">Linkedin</span></a></div>
            <div><a target="_blank" href="https://github.com/Kaichloe" ><img class="git-border" src="https://image.flaticon.com/icons/svg/1051/1051377.svg" width="30px" /><span class="label">Github</span></a></div>
            <div><a target="_blank" href="https://angel.co/kaiyip-ho" class="fa-angellist"><img class="angel-border" src="https://cdn.freebiesupply.com/logos/large/2x/angellist-logo-svg-vector.svg" width="21px" /><span class="label">AngelList</span></a></div>
          </div>
        </div>

        <div class="personal-links">
          <div class="person-name">
            <a class="personal-site" target="_blank" href="https://neminem1203.github.io/">Paul Tan</a>
          </div>

          <div class="links">
            <div><a target="_blank" href="https://www.linkedin.com/in/tpaul1203/"> <img class="link-border" src="https://image.flaticon.com/icons/svg/1384/1384088.svg" width="30px" /><span class="label">LinkedIn</span></a></div>
            <div><a target="_blank" href="https://github.com/Neminem1203" ><img class="git-border" src="https://image.flaticon.com/icons/svg/1051/1051377.svg" width="30px" /><span class="label">Github</span></a></div>
            <div><a target="_blank" href="https://angel.co/paul-tan-00" class="fa-angellist"><img class="angel-border" src="https://cdn.freebiesupply.com/logos/large/2x/angellist-logo-svg-vector.svg" width="21px" /><span class="label">AngelList</span></a></div>
          </div>
        </div>

        <div class="personal-links">
          <div class="person-name">
            <a class="personal-site" target="_blank" href="">Richard Lim</a>
          </div>

          <div class="links">
            <div><a target="_blank" href="https://www.linkedin.com/in/richard-lim-7100a4a7/"> <img class="link-border" src="https://image.flaticon.com/icons/svg/1384/1384088.svg" width="30px" /> <span class="label">Linkedin</span></a></div>
            <div><a target="_blank" href="https://github.com/rlim92"><img class="git-border" src="https://image.flaticon.com/icons/svg/1051/1051377.svg" width="30px" /><span class="label">Github</span></a></div>
            <div><a target="_blank" href="https://angel.co/rich-lim" class="fa-angellist"><img class="angel-border" src="https://cdn.freebiesupply.com/logos/large/2x/angellist-logo-svg-vector.svg" width="21px" /><span class="label">AngelList</span></a></div>
          </div>
        </div>

        <div class="personal-links">
          <div class="person-name">
            <a class="personal-site" target="_blank" href="https://robromano1.github.io/personal_site/">Rob Romano</a>
          </div>

          <div class="links">
            <div><a target="_blank" href="https://www.linkedin.com/in/robert-romano/" ><img class="link-border" src="https://image.flaticon.com/icons/svg/1384/1384088.svg" width="30px" /><span class="label">Linkedin</span></a></div>
            <div><a target="_blank" href="https://github.com/Robromano1"> <img class="git-border" src="https://image.flaticon.com/icons/svg/1051/1051377.svg" width="30px" /><span class="label">Github</span></a></div>
            <div><a target="_blank" href="https://angel.co/rob_romano" class="fa-angellist"><img class="angel-border" src="https://cdn.freebiesupply.com/logos/large/2x/angellist-logo-svg-vector.svg" width="21px" /><span class="label">AngelList</span></a></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;