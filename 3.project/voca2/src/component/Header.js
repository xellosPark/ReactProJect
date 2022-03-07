import { Link } from "react-router-dom";

export default function Header() {
    return( 
      <div className="header">
        <h1>
            {/* <a href="/">토익 영단어(고급)</a> */}
            <Link to="/">토익 영단어(고급)</Link>
        </h1>
        <div className="menu">
            {/* <a href="#x" className="link">
                단어 추가
            </a> */}
            <Link to="/create_word" className="link">
                단어 추가
            </Link>
            <a href="#x" className="link">
                Day 추가
            </a>
        </div>
      </div>
    );
}