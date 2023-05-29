import React from "react";
import logo from "./images/lautaro-andreani-xkBaqlcqeb4-unsplash.jpg";
import logo2 from "./images/nick-karvounis-TkZYCXmrKK4-unsplash.jpg";
import logo3 from "./images/pankaj-patel-1IW4HQuauSU-unsplash.jpg";
import logo4 from "./images/rubaitul-azad-HLQDfaJUTVI-unsplash.jpg";
import "./Section.css";
import { Link } from "react-router-dom";

const SectionTwo = () => {
  return (
    <section>
      <section className="sectionTwo">
        <div className="container">
          <h3 className="title">Learn Javascript</h3>
          <div className="content">
            <img src={logo3} alt="javascript img" />
            <p>
              JavaScript is a scripting or programming language that allows you
              to implement complex features on web pages — every time a web page
              does more than just sit there and display static information for
              you to look at — displaying timely content updates, interactive
              maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. —
              you can bet that JavaScript is probably involved. It is the third
              layer of the layer cake of standard web technologies, two of which
              (HTML and CSS) we have covered in much more detail in other parts
              of the Learning Area.
            </p>
            <div className="btn">
              <Link to="/javascript">Start Quiz</Link>
            </div>
          </div>
        </div>

        <div className="container">
          <h3 className="title">Learn React</h3>
          <div className="content">
            <img src={logo} alt="javascript img" />
            <p>
              The React.js framework is an open-source JavaScript framework and
              library developed by Facebook. It’s used for building interactive
              user interfaces and web applications quickly and efficiently with
              significantly less code than you would with vanilla JavaScript. In
              React, you develop your applications by creating reusable
              components that you can think of as independent Lego blocks. These
              components are individual pieces of a final interface, which, when
              assembled, form the application’s entire user interface.
            </p>

            <div className="btn">
              <Link to="/react">Start Quiz</Link>
            </div>
          </div>
        </div>

        <div className="container">
          <h3 className="title">Learn Css</h3>
          <div className="content">
            <img src={logo2} alt="javascript img" />
            <p>
              CSS stands for Cascading Style Sheets. It is a style sheet
              language which is used to describe the look and formatting of a
              document written in markup language. It provides an additional
              feature to HTML. It is generally used with HTML to change the
              style of web pages and user interfaces. It can also be used with
              any kind of XML documents including plain XML, SVG and XUL. CSS is
              used along with HTML and JavaScript in most websites to create
              user interfaces for web applications and user interfaces for many
              mobile applications.
            </p>
            <div className="btn">
              <Link to="/css">Start Quiz</Link>
            </div>
          </div>
        </div>

        <div className="container">
          <h3 className="title">Learn Git</h3>
          <div className="content">
            <img src={logo4} alt="javascript img" />
            <p>
              GitHub is a website and cloud-based service that helps developers
              store and manage their code, as well as track and control changes
              to their code. To understand exactly what GitHub is, you need to
              know two connected principles: Version control Git In this
              article, we’ll first explain those two principles. Then, we’ll dig
              into more about GitHub and how you can actually use GitHub to work
              with WordPress and/or Kinsta.
            </p>
            <div className="btn">
              <Link to="/git">Start Quiz</Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SectionTwo;
