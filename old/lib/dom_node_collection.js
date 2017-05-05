class DOMNodeCollection {
  constructor(elements){
    this.elements = elements;
  }

  html(string = null){
    if (string === null) {
      return this.elements[0].innerHTML;
    } else {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].innerHTML = string;
        return this.elements;
      }
    }
  }

  empty () {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].innerHTML = "";
    }
    return this.elements;
  }

  append (arg) {
    for (var i = 0; i < this.elements.length; i++) {
      if (arg instanceof HTMLElement){
        this.elements[i].appendChild(arg);
        return this.elements;
      } else if (typeof arg === "string"){
        this.elements[i].innerHTML += (arg);
        return this.elements;
      }
    }
  }

  attr (name, value = null) {
    if (value === null) {
      return this.elements[0].getAttribute(name);
    } else {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].setAttribute(name, value);
      }
      return this.elements;
    }
  }

  addClass (name) {
      const classes = this.elements[0].getAttribute("class");
      if (classes === null){
        this.attr("class", name);
      } else {
        const newClasses = name + " " + classes;
        this.attr("class", newClasses);
      }
      return this.elements;
  }

  removeClass (classes) {
    const currentClasses = this.elements[0].getAttribute("class").split(" ");
    const keptClasses = [];
    for (var i = 0; i < currentClasses.length; i++) {
      if (!classes.includes(currentClasses[i])) {
        keptClasses.push(currentClasses[i]);
      }
    }

    if (keptClasses.length === 0) {
      this.elements[0].removeAttribute("class");
      return this.elements;
    }

    this.attr("class", keptClasses.join(" "));
    return this.elements;
  }

  children () {
    const kids = [];
    for (var i = 0; i < this.elements.length; i++) {
      kids = kids.concat(this.elements[i].children);
    }
    return new DOMNodeCollection(kids);
  }

  parent () {
    const parents = [];
    for (var i = 0; i < this.elements.length; i++) {
      parents = parents.concat(this.elements[i].parentElement);
    }
    return new DOMNodeCollection(parents);
  }

  find (selector) {
    const descendents = [];

    for (var i = 0; i < this.elements.length; i++) {
      descendents = descendents.concat(this.elements[i].querySelectorAll(selector));
    }
    return new DOMNodeCollection(descendents);
  }

  remove () {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].remove();
    }

  }


}


module.exports = DOMNodeCollection;
