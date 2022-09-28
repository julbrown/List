function App() {
  const [list, setList] = React.useState([]);
  return (
    <React.Fragment>
      <ul>
        {/*List items*/}
        {list.map((item, index) => (
          <div key={list.text}>
            <li className={item.complete ? "complete" : ""}>
              <svg
                height="10px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0"
                y="0"
                viewBox="0, 0, 590.088, 522.431"
              >
                <g id="layer1">
                  <path
                    d="M3.179,332.702 L0,331.316 C58.162,299.934 102.129,272.143 165.059,241.357 C196.247,287.963 216.275,322.209 244.491,380.721 C317.446,243.823 400.046,84.169 579.494,-0 C573.704,75.61 572.435,133.976 590.088,199.231 C450.006,268.799 337.296,390.748 256.067,520.027 L254.581,522.431 C179.674,436.203 104.663,377.515 3.179,332.702 z"
                    fill={item.complete ? "#5dbd1d" : "#a9a9a9"}
                    id="path880"
                  />
                </g>
              </svg>
              {item.text}
            </li>
            <svg
              height="15px"
              xmlns="http://www.w3.org/2000/svg"
              fill="#d16014"
              viewBox="0 -3 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        ))}
      </ul>
      {/*input field*/}
      <input type="text" placeholder="Type here to add an item!" />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
