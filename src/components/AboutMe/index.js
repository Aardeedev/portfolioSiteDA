import React from "react"

import css from "./AboutMe.module.css"

const AboutMe = ({ active }) => {
  return (
    <div
      className={[css.aboutMe, !active ? css.inactive : ""].join(" ")}
      id="AboutMe"
    >
      <h2> About Me</h2>
      <p>
        OMAR!... <br />
        I can do the HTML, CSS, and JavaScript and know node.JS and React and I can also do the MongoDB
        <bt />
        I'm pretty flippin awesome. I mean I can literally do anything. HIRE ME
        AND GIVE ME LOTS OF MONEYS!
        <br />
        Lorem ipsum dolor amet pork belly forage jianbing hoodie portland
        leggings flexitarian. Dreamcatcher bespoke small batch, swag kombucha
        four loko DIY bushwick direct trade truffaut gochujang cornhole cred
        offal austin. Umami chartreuse hammock tbh forage af hashtag literally
        keffiyeh green juice la croix ennui taiyaki. Food truck hashtag VHS man
        braid XOXO stumptown. Paleo portland listicle cornhole affogato. Pop-up
        you probably haven't heard of them raclette, organic tacos dreamcatcher
        edison bulb hashtag post-ironic adaptogen vinyl seitan hexagon kinfolk.
        Next level vaporware crucifix farm-to-table offal. Glossier mlkshk
        farm-to-table meggings beard hell of. Cloud bread retro umami godard
        chillwave. Enamel pin ugh fanny pack, +1 vice food truck man bun
        microdosing. Af single-origin coffee neutra post-ironic migas.
        Intelligentsia normcore pinterest shabby chic blue bottle blog ennui
        messenger bag literally. Church-key cliche truffaut try-hard pug
        williamsburg ugh DIY pinterest. Jianbing scenester meh humblebrag. Banh
        mi brooklyn PBR&B DIY waistcoat hell of forage helvetica yuccie YOLO
        tofu. Tacos twee fixie sustainable taiyaki authentic schlitz, raclette
        biodiesel franzen. Synth kitsch heirloom, meditation leggings artisan
        everyday carry. Chambray glossier cold-pressed pinterest pug readymade.
        Lyft authentic kinfolk shabby chic.
      </p>
      <p />
    </div>
  )
}

export default AboutMe
