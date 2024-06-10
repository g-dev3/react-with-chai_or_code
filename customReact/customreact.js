const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to Visit Google",
};

const root = document.querySelector("#root");

function customRender(reactElement,container) {
  const domElemnt = document.createElement(reactElement.type);

  domElemnt.innerHTML = reactElement.children;
  domElemnt.setAttribute("href", reactElement.props.href);

  domElemnt.setAttribute("target", reactElement.props.target);

  container.appendChild(domElemnt)
}

customRender(reactElement,root)