import React from "react";
import { Link } from "react-router-dom";
import Svg from "./styled-Components/Svg";
import ContentHome from "./styled-Components/ContentHome";
import PrincipalContentHome from "./styled-Components/PrincipalContentHome";

const Navbar = () => {
  return (
    <PrincipalContentHome>
      <ContentHome>
        <Link to="/">
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z" />
          </Svg>
        </Link>
        <Link to="/aboutme">
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 2v20h24v-20h-24zm13 15h-10v-.417c-.004-1.112.044-1.747 1.324-2.043 1.403-.324 2.787-.613 2.122-1.841-1.973-3.637-.563-5.699 1.554-5.699 2.077 0 3.521 1.985 1.556 5.699-.647 1.22.688 1.51 2.121 1.841 1.284.297 1.328.936 1.323 2.057v.403zm8 0h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6v-2h6v2z" />
          </Svg>
        </Link>
        <Link to="/skills">
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 9v14h24v-14h-24zm16 3h2v2h-2v-2zm-3 0h2v2h-2v-2zm3 3v2h-2v-2h2zm-6-3h2v2h-2v-2zm3 3v2h-2v-2h2zm-6-3h2v2h-2v-2zm3 3v2h-2v-2h2zm-7-3h3v2h-3v-2zm0 3h4v2h-4v-2zm14 5h-10v-2h10v2zm4-3h-4v-2h4v2zm0-3h-2v-2h2v2zm-9.358-8.812c-1.036-.043-2.293-.086-3.049-1.027-.393-.489-.594-1.136-.594-1.847 0-.422.071-.867.217-1.314l1.206.363c-.205.634-.269 1.506.172 2.054.45.56 1.392.512 2.376.584 2.134.155 3.03 1.423 3.03 2.678 0 .461-.121.92-.345 1.321h-1.569c1.016-.804 1.06-2.706-1.444-2.812z" />
          </Svg>
        </Link>
        <Link to="/proyects">
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
          </Svg>
        </Link>
        <Link to="/contact">
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M6.02 7.389c.399-.285.85-.417 1.292-.417.944 0 1.852.6 2.15 1.599-.382-.294-.83-.437-1.281-.437-.458 0-.919.147-1.321.434-.799.57-1.153 1.541-.845 2.461-1.242-.89-1.247-2.747.005-3.64zm3.741 12.77c.994.334 4.071 1.186 7.635 3.841l6.604-4.71c-1.713-2.402-1.241-4.082-2.943-6.468-1.162-1.628-1.827-1.654-3.037-1.432l.599.84c.361.507-.405 1.05-.764.544l-.534-.75c-.435-.609-1.279-.229-2.053-.051l.727 1.019c.36.505-.403 1.051-.764.544l-.629-.882c-.446-.626-1.318-.208-2.095-.01l.769 1.078c.363.508-.405 1.049-.764.544l-3.118-4.366c-.968-1.358-3.088.083-2.086 1.489l4.605 6.458c-.494-.183-1.363-.349-1.93-.349-1.754 0-2.429 1.92-.222 2.661zm-3.286-2.159h-4.475v-14h10v6.688l2-.471v-8.217c0-1.104-.895-2-2-2h-10c-1.105 0-2 .896-2 2v18.678c-.001 2.213 3.503 3.322 7.005 3.322 1.812 0 3.619-.299 4.944-.894-2.121-.946-6.378-1.576-5.474-5.106z" />
          </Svg>
        </Link>
      </ContentHome>
    </PrincipalContentHome>
  );
};

export default Navbar;
