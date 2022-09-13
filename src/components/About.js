import classes from "./about.module.css";
import logo from "../assets/tmdblogo.svg";

export default function About() {
  return (
    <div className={classes.container}>
      <div className={classes.topside}>
        <div className={classes.top}>
          <h2 className={classes.title}>About</h2>
          <hr className={classes.break}></hr>
        </div>
        <div className={classes.topmiddle}>
          <div className={classes.mid}>
            <p className={classes.col}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus optio velit eius voluptas enim sequi consequatur, unde
              recusandae fuga fugiat temporibus esse quibusdam? Molestias
              doloremque suscipit optio, neque magnam voluptatibus similique
              reiciendis temporibus, dolorem, a aspernatur quis assumenda nam
              consectetur possimus officia veniam rerum dolor molestiae! Culpa
              corporis ratione facere saepe necessitatibus blanditiis magni
              quaerat, labore vel dignissimos totam quasi repellat aliquam
              beatae deserunt repudiandae laboriosam quidem explicabo fuga odit!
            </p>
            <p className={classes.col}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              assumenda, iste ipsa eveniet dolorum aliquid? Quis fugiat, quasi
              quae optio voluptatum esse provident temporibus repellendus? Nemo
              totam explicabo laudantium atque nisi neque, sint accusantium
              laboriosam deleniti mollitia tempore veritatis inventore at aut,
              nesciunt harum suscipit ea optio quo. Amet neque eius esse optio.
              Iure nisi laborum libero maiores, sit est nostrum. Rerum nemo
              aliquid dignissimos, tenetur enim officiis earum aspernatur.
            </p>
          </div>
          <div className={classes.credits}>
            <p>This site was made possible thanks to an API from: </p>
            <a href="https://www.themoviedb.org/" target="_blank">
              <img src={logo}></img>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.bottomside}>
        <p>Movie app with TMDB API | Pedro Narbondo | 2022</p>
        <a href="https://github.com/pedronarbondo">Find me @ Github !</a>
      </div>
    </div>
  );
}
