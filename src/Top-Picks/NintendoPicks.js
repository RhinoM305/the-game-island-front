import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaystation } from "@fortawesome/free-brands-svg-icons"
import "../index.css";
import $ from "jquery";




function NintendoPicks() {

    return (
      <div className="recommend-body p-0 m-0 font-Rubik text-white scale-[1.1] mt-6">
      <div className="features-accordion">
        <div
          className="board-feature"
          style={{
            background:
              "url(https://assets.codepen.io/545665/demonsouls-back.jpg) center bottom no-repeat",
            backgroundSize: "auto 100%"
          }}
        >
          <div className="board-feature-container">
            <span className="number">01</span>
            <p className="topic">Demon's Souls</p>
            <h3>On the first day man was granted a soul. And with it, clarity.</h3>
            <div className="accordion-content">
              The world was once victim to a previous scourge of Demons in an
              ancient past before King Allant came to the throne.
            </div>
            <div className="systems">
            </div>
          </div>
        </div>
        <div
          className="board-feature"
          style={{
            background:
              "url(https://assets.codepen.io/545665/darksouls-back.png) center bottom no-repeat",
            backgroundSize: "auto 100%"
          }}
        >
          <div className="board-feature-container">
            {" "}
            <span className="number">02</span>
            <p className="topic">Dark Souls</p>
            <h3>Born in the dark and warmed by the fire.</h3>
            <div className="accordion-content">
              At some point in the past, a being known as Manus awakened and began
              to spread the Abyss—an expanse of darkness—over the land of Oolacile.
            </div>
            <div className="systems">
            </div>
          </div>
        </div>
        <div
          className="board-feature"
          style={{
            background:
              "url(https://assets.codepen.io/545665/darksouls2-back.png) center bottom no-repeat",
            backgroundSize: "auto 100%"
          }}
        >
          <div className="board-feature-container">
            {" "}
            <span className="number">03</span>
            <p className="topic">Dark Souls II</p>
            <h3>Maybe you have seen it in a dream. A murkey forgotten land.</h3>
            <div className="accordion-content">
              You will lose everything, once branded. The symbol of the curse, an
              augur of darkness. Your past, your future, your very light.
            </div>
            <div className="systems">
            </div>
          </div>
        </div>
        <div
          className="board-feature"
          style={{
            background:
              "url(https://assets.codepen.io/545665/bloodbourne-back.png) center bottom no-repeat",
            backgroundSize: "auto 100%"
          }}
        >
          <div className="board-feature-container">
            {" "}
            <span className="number">04</span>
            <p className="topic">Bloodborne</p>
            <h3>Welcome home good hunter. What is it you desire.</h3>
            <div className="accordion-content">
              The city of Yharnam, a place of healing and miracles, is the
              destination of many foreign travellers seeking blood healing.
            </div>
            <div className="systems">
              <i className="fab fa-playstation" />
            </div>
          </div>
        </div>
        <div
          className="board-feature"
          style={{
            background:
              "url(https://assets.codepen.io/545665/eldenring-back.png) center bottom no-repeat",
            backgroundSize: "auto 100%"
          }}
        >
          <div className="board-feature-container">
            {" "}
            <span className="number">05</span>
            <p className="topic">Elden Ring</p>
            <h3>The call of long-lost grace speaks to us all.</h3>
            <div className="accordion-content">
              Rise, Tarnished, and be guided by grace to brandish the power of the
              Elden Ring and become an Elden Lord in the Lands Between.
            </div>
            <div className="systems">
            </div>
          </div>
        </div>
      </div>
    </div>
    

    )
}

export default NintendoPicks