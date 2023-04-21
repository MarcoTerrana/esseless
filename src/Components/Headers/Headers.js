import React from "react";

const Headers = () => {
    return (
        <div className='Headers'>
        <header id="intro">
          <article class="fullheight">
            <div class="hgroup">
              <h1>Esseless</h1>
              <h2>Work in progress</h2>
              <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
            </div>
          </article>

          <nav id="nav">
            <div class="navbar">
             {/*<div class="brand"><a href="#welcome" img src="">Loading...</a></div>*/}
              <ul>
                <li><a class="icon rooms" href="#rooms"><span>Sleep</span></a></li>
                <li><a class="icon attractions" href="#hotelinfo"><span>Informations</span></a></li>
                {/*<li><a class="icon dining" href="#dining"><span></span></a></li>*/}
                <li><a class="icon events" href="#events"><span>Book</span></a></li>
              </ul>
            </div>
          </nav>
        </header>
    </div>
     );
}

export default Headers;