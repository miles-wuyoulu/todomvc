<template>
  <div  class="aside">
    <h3>JavaScript</h3>
    <h4>Vanilla JavaScript Example</h4>
    <a href="#">Source</a>
    <hr/>
    <div class="quote">
      <p>
        JavaScript® (often shortened to JS) is a lightweight, interpreted,
        object-oriented language with first-class functions, most known as the
        scripting language for Web pages, but used in many non-browser
        environments as well such as node.js or Apache CouchDB.
      </p>
    </div>

    <span><a href="#">JavaScript</a></span>

    <footer>
      <p>
        If you have other helpful links to share, or find any of the links above
        no longer work, please let us know.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TodoAside",
}
</script>

<style scoped>


.aside {
  width: 272px;
  position: relative;
  padding: 10px;
  margin: 8px 0 0 8px;
  border-radius: 8px;
  background: rgb(251, 251, 251);
  transition: all 0.5s linear;
}


h3,
h4 {
  margin: 10px 0;
  font-weight: 500;
  line-height: 1.2;
  color: #000;
}

h3 {
  font-size: 24px;
}

h4 {
  margin-bottom: 0;
  font-size: 14px;
}

a {
  font-weight: normal;
  text-decoration: none;
  color: #b83f45;
}

hr {
  margin: 20px 0;
  border: 0;
  border-top: 1px dashed #c5c5c5;
  border-bottom: 1px dashed #f7f7f7;
}

span {
  position: absolute;
  right: 0;
  margin: 20px 0 20px 0;
}
span::after {
  content: "";
  position: absolute;
  top: -20px;
  right: 51px;
  border: 13px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.04);
}
.quote {
  position: relative;
  padding: 10px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 5px;
}

.quote p {
  font-style: italic;
}

.quote p::before {
  content: "“";
  font-size: 50px;
  opacity: 0.15;
  position: absolute;
  top: 3px;
  left: 18px;
}

.quote p::after {
  content: "”";
  font-size: 50px;
  opacity: 0.15;
  position: absolute;
  bottom: -16px;
  right: 6px;
}

footer {
  margin-top: 50px;
  border-top: 1px dashed #c5c5c5;
}

footer p {
  font-style: italic;
}
</style>